export const postsData = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/amandagayotto.png',
            name: 'Bruna Montannez',
            role: 'UX Designer'
        },
        content: [
            { type: 'paragraph', content: 'A área de UX Design é multidisciplinar. Nela estão envolvidos conhecimentos sobre psicologia, marketing, negócios, gestão de pessoas, tecnologia, lógica, e muito mais.'},
            { type: 'paragraph', content: 'Dessa forma, é fundamental que o profissional que pretende trabalhar ou que já atua como Product Designer mantenha sempre um mindset de curiosidade para aprender sobre os mais variados assuntos'},
            { type: 'link', content: 'https://aelaschool.com/carreira/curiosidade-carreira-ux-designer/'}
        ],
        publishedAt: new Date('2022-05-26 14:05:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/vanor-cardozo.png',
            name: 'Vanor Cardozo',
            role: 'Desenvolvedor Front-end'
        },
        content: [
            { type: 'paragraph', content: 'eSports - É um APP para conectar jogadores 🎮. Você poderá visualizar usuários disponíveis por tipo de jogo e se conectar com os players. Projeto desenvolvido durante a NLW - Next Level Week oferecida pela Rocketseat.'},
            { type: 'paragraph', content: 'Tecnologias utilizadas: TypeScript, NodeJS, React, React Native, Radix-ui, Axios, Vite, TailWind, Express, Prisma, SQLite, Cors, Expo, Phosphor.'},
            { type: 'link', content: 'https://www.linkedin.com/feed/update/urn:li:activity:6978372715988627456/'}
        ],
        publishedAt: new Date('2022-05-27 18:10:00'),
    },
];