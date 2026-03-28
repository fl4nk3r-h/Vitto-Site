/**
 * Custom checkmark with #D32F2F outer glow
 */
export function PremiumCheckIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#D32F2F" floodOpacity="0.7" />
            </filter>
            <circle cx="11" cy="11" r="10" fill="rgba(211,47,47,0.08)" />
            <path d="M7 11.5L10 14.5L15 9.5" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
        </svg>
    );
}

/**
 * Custom X icon for negative values
 */
export function PremiumXIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" fill="rgba(211,47,47,0.08)" />
            <path d="M8 8L14 14M14 8L8 14" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
