export const dynamic = 'force-static';

export default function manifest() {
    return {
        name: 'Mohan Lal Portfolio',
        short_name: 'Mohan Lal',
        description: 'Full-Stack Developer & Cloud-Native Architect Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#020617',
        theme_color: '#020617',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
