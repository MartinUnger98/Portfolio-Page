import { Component, ElementRef, ViewChild } from '@angular/core';
import JSConfetti from 'js-confetti';
import lottie from 'lottie-web';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component.media-query.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('nameDiv') nameDiv!: ElementRef;
  @ViewChild('nameImg') nameImg!: ElementRef;
  @ViewChild('nameErr') nameErr!: ElementRef;
  @ViewChild('emailDiv') emailDiv!: ElementRef;
  @ViewChild('emailImg') emailImg!: ElementRef;
  @ViewChild('emailErr') emailErr!: ElementRef;  
  @ViewChild('messageDiv') messageDiv!: ElementRef;
  @ViewChild('messageImg') messageImg!: ElementRef;
  @ViewChild('messageErr') messageErr!: ElementRef;
  @ViewChild('btnDiv') btnDiv!: ElementRef;
  @ViewChild('sendmailBtn') sendmailBtn!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  
 
  REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  isChecked: boolean = false;
  private ICON_RIGHT = 'assets/icons/right.svg';
  private ICON_WRONG = 'assets/icons/wrong.svg';
  private animationPath = 'assets/img/Animation - 1699433179691.json';

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.changeFormElements();
  }


  ngAfterViewInit() {
    this.nameInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
    this.emailInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
    this.messageInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
  }

  changeFormElements() {
    let nameValue = this.nameInput.nativeElement.value;
    let emailValue = this.emailInput.nativeElement.value;
    let messageValue = this.messageInput.nativeElement.value;

    this.validateInput(nameValue, this.nameDiv, this.nameErr, this.nameImg);
    this.validateInput(messageValue, this.messageDiv, this.messageErr, this.messageImg);
    this.validateEmail(emailValue, this.emailDiv, this.emailErr, this.emailImg);
    this.checkButtonForm(nameValue, emailValue, messageValue, this.isChecked);

  }

  validateInput(inputValue: string, borderElement: ElementRef, errorElement: ElementRef, imgElement: ElementRef) {
    let isTrue: boolean;  
    if (inputValue.length >= 2) {
      isTrue = true;
    } else if (inputValue.length >= 1) {
      isTrue = false;
    } else {
      this.restoreValue(borderElement.nativeElement, errorElement.nativeElement, imgElement.nativeElement);
      return;
    }  
    this.setValue(borderElement.nativeElement, errorElement.nativeElement, imgElement.nativeElement, isTrue);
  }


  validateEmail(inputValue: string, borderElement: ElementRef, errorElement: ElementRef, imgElement: ElementRef) {
    if (inputValue.match(this.REGEX)) {
      this.setValue(borderElement.nativeElement, errorElement.nativeElement, imgElement.nativeElement, true);
    } else {
      this.setValue(borderElement.nativeElement, errorElement.nativeElement, imgElement.nativeElement, false);
    }
    if (inputValue.length == 0) {
      this.restoreValue(borderElement.nativeElement, errorElement.nativeElement, imgElement.nativeElement);
    }
  }
  

  setValue(border: HTMLElement, error: HTMLElement, img: HTMLImageElement, isTrue: boolean) {
    let valueClass = isTrue ? 'truevalue' : 'falsevalue';
    let iconSrc = isTrue ? this.ICON_RIGHT : this.ICON_WRONG;
  
    border.classList.add(valueClass);
    error.classList.toggle('hidden', isTrue);
    img.src = iconSrc;
  
    let otherClass = isTrue ? 'falsevalue' : 'truevalue';
    if (border.classList.contains(otherClass)) {
      border.classList.remove(otherClass);
    }
  }


  restoreValue(border: HTMLElement, error: HTMLElement, img: HTMLImageElement) {
    border.classList.remove('truevalue', 'falsevalue');
    img.src = '';
    error.classList.add('hidden');
  }

  checkButtonForm(name: string, mail: string, message: string, checkbox: boolean) {
    let form = name.length > 1 && mail.match(this.REGEX) && message.length > 1 && checkbox;
    this.btnDiv.nativeElement.disabled = !form;
  }

  confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }

  async sendMail(event: any) {
    this.overlay.nativeElement.classList.remove('d-none');
    try {
      event.preventDefault();
      const data = new FormData(event.target);
      await fetch("https://formspree.io/f/mjvqzpqy", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
      this.playAnimation();
      this.confetti();
      this.restoreInputContainers();
      setTimeout(() => {
        this.overlay.nativeElement.classList.add('d-none');
        this.sendmailBtn.nativeElement.innerHTML = '';
      }, 4500);
    }
  }

  playAnimation() {
    let animationContainer = this.sendmailBtn.nativeElement;
    lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: this.animationPath
    });
  }

  restoreInputContainers() {
    let name = this.nameInput.nativeElement;
    let mail = this.emailInput.nativeElement;
    let message = this.messageInput.nativeElement;
    this.restoreInputValues(name, mail, message);
    this.restoreInputDivsAfterSendingMail(name, mail, message);
  }
  
  restoreInputValues(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement) {
    name.value = '';
    mail.value = '';
    message.value = '';
    this.isChecked = false;
  }

  restoreInputDivsAfterSendingMail(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement) {
    this.validateInput(name.value, this.nameDiv, this.nameErr, this.nameImg);
    this.validateInput(message.value, this.messageDiv, this.messageErr, this.messageImg);
    this.validateEmail(mail.value, this.emailDiv, this.emailErr, this.emailImg);
  }


}
