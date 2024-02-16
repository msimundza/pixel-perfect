export {};

declare global {
  interface Window {
    onRecaptchaSuccess: any;
    onRecaptchaExpired: any;
  }
}
