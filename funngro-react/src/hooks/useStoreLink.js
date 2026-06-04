export const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.wishbanc.funngro&hl=en_IN';
export const IOS_URL = 'https://apps.apple.com/in/app/funngro/id1579361075';

/**
 * Detects the user's OS and returns the appropriate app store URL.
 * Android  → Google Play Store
 * iOS      → Apple App Store
 * Desktop  → Google Play Store (default fallback)
 */
export function getStoreLink() {
  if (typeof navigator === 'undefined') return ANDROID_URL;
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return ANDROID_URL;
  if (/iPad|iPhone|iPod/i.test(ua)) return IOS_URL;
  return ANDROID_URL; // default for desktop
}
