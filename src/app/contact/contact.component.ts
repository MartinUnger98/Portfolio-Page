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


  /**
   * Toggles the checkbox state and triggers a change in form elements.
   */
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.changeFormElements();
  }


  /**
   * Initializes event listeners on form inputs after the view has been initialized.
   */
  ngAfterViewInit() {
    this.nameInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
    this.emailInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
    this.messageInput.nativeElement.addEventListener('input', this.changeFormElements.bind(this));
  }


  /**
   * Triggers validation and UI updates for each form input element.
   */
  changeFormElements() {
    let nameValue = this.nameInput.nativeElement.value;
    let emailValue = this.emailInput.nativeElement.value;
    let messageValue = this.messageInput.nativeElement.value;

    this.validateInput(nameValue, this.nameDiv, this.nameErr, this.nameImg);
    this.validateInput(messageValue, this.messageDiv, this.messageErr, this.messageImg);
    this.validateEmail(emailValue, this.emailDiv, this.emailErr, this.emailImg);
    this.checkButtonForm(nameValue, emailValue, messageValue, this.isChecked);

  }


  /**
   * Validates a text input and updates UI elements based on validation results.
   * @param inputValue - The text value of the input to validate.
   * @param borderElement - The border element that visually indicates validation status.
   * @param errorElement - The element that displays error messages.
   * @param imgElement - The image element that shows validation status icons.
   */
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


  /**
   * Validates an email input against a regular expression and updates UI elements accordingly.
   * @param inputValue - The email value of the input to validate.
   * @param borderElement - The border element for visual validation indication.
   * @param errorElement - The element to display error messages.
   * @param imgElement - The image element for showing validation status icons.
   */
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
  

  /**
   * Sets the UI elements' states based on the validation result.
   * @param border - The border element to style based on validation result.
   * @param error - The error element to show or hide.
   * @param img - The image element to update based on validation result.
   * @param isTrue - The boolean value representing the validation result.
   */
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


  /**
   * Resets the UI elements to their default state.
   * @param border - The border element to reset.
   * @param error - The error element to hide.
   * @param img - The image element to clear.
   */
  restoreValue(border: HTMLElement, error: HTMLElement, img: HTMLImageElement) {
    border.classList.remove('truevalue', 'falsevalue');
    img.src = '';
    error.classList.add('hidden');
  }


   /**
   * Checks the form inputs and updates the submit button's disabled state.
   * @param name - The name input value.
   * @param mail - The email input value.
   * @param message - The message input value.
   * @param checkbox - The state of the agreement checkbox.
   */
  checkButtonForm(name: string, mail: string, message: string, checkbox: boolean) {
    let form = name.length > 1 && mail.match(this.REGEX) && message.length > 1 && checkbox;
    this.btnDiv.nativeElement.disabled = !form;
  }


  /**
   * Handles the email sending process, including UI updates and error handling.
   * @param event - The form submission event.
   */
  async sendMail(event: any) {
    this.overlay.nativeElement.classList.remove('d-none');
    try {
      event.preventDefault();
      const data = new FormData(event.target);
      this.sendMailFetch(data);
        
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
      this.showSendAnnimation();
    }
  }


  /**
   * Sends the email using a fetch request.
   * @param data - The form data to be sent.
   */
  async sendMailFetch(data: any) {
    await fetch("https://formspree.io/f/mjvqzpqy", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });    
  }


  /**
   * Plays an animation and triggers confetti while restoring the input containers.
   */
  showSendAnnimation() {
    this.playAnimation();
    this.confetti();
    this.restoreInputContainers();
    setTimeout(() => {
      this.overlay.nativeElement.classList.add('d-none');
      this.sendmailBtn.nativeElement.innerHTML = '';
    }, 4500);
  }


  /**
   * Triggers a confetti animation.
   */
  confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }

  /**
   * Plays a lottie animation on the send button.
   */
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


  /**
   * Restores the input containers to their default state.
   */
  restoreInputContainers() {
    let name = this.nameInput.nativeElement;
    let mail = this.emailInput.nativeElement;
    let message = this.messageInput.nativeElement;
    this.restoreInputValues(name, mail, message);
    this.restoreInputDivsAfterSendingMail(name, mail, message);
  }
  

  /**
   * Clears the values of the input fields.
   * @param name - The name input element.
   * @param mail - The email input element.
   * @param message - The message input element.
   */
  restoreInputValues(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement) {
    name.value = '';
    mail.value = '';
    message.value = '';
    this.isChecked = false;
  }


  /**
   * Validates and resets the UI for each input field after sending an email.
   * @param name - The name input element.
   * @param mail - The email input element.
   * @param message - The message input element.
   */
  restoreInputDivsAfterSendingMail(name: HTMLInputElement, mail: HTMLInputElement, message: HTMLInputElement) {
    this.validateInput(name.value, this.nameDiv, this.nameErr, this.nameImg);
    this.validateInput(message.value, this.messageDiv, this.messageErr, this.messageImg);
    this.validateEmail(mail.value, this.emailDiv, this.emailErr, this.emailImg);
  }


}
