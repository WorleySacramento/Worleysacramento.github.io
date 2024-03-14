import React from 'react'
import styles from './about.module.css'

function About() {
    return (
        <div className={styles.container}>
            <div>
                <div><h1 className={styles.title}>Sobre Mim</h1></div>
                <p className={styles.paragrafo}>
                    Olá, meu nome é Worley, me formei em Análise e Desenvolvimento de Sistemas em junho de 2023. Sou pai de três filhos. Estou animado para
                    compartilhar meu portfólio com você e discutir como posso ajudá-lo com seus projetos de desenvolvimento de software.
                    Ao longo da minha educação, desenvolvi habilidades em programação. Também tenho experiência em desenvolvimento de front-end.
                    Estou confiante de que posso usar minhas habilidades para criar soluções de software inovadoras e eficientes.
                    Acesse meu portfólio para ver alguns exemplos do meu trabalho.
                    Estou sempre disposto a aprender novas coisas e estou sempre em busca de novos desafios.
                </p>

                <div className={styles.lists}>

                    <div className={styles.list1}>
                        <div className={styles.titlelists}>
                        <h3>Minha experiência em desenvolvimento de front-end inclui:</h3>
                        </div>
                        <ul>
                            <li>Desenvolver websites responsivos.</li>
                            <li>Criar aplicativos móveis usando React Native e o framework Expo.</li>
                            <li>Construir aplicações web com JavaScript, HTML 5 e CSS 3</li>
                            <li>Utilizar bibliotecas como Bootstrap ou Tailwind.</li>
                            <li>Trabalhar com APIs RESTful.</li>
                            <li>Gerenciar projetos utilizando Git e Github.</li>
                            <li>Implementação de teste unitário.</li>
                            <li>Design UI/UX.</li>

                        </ul>
                    </div>

                    <div className={styles.list2}>
                        <div className={styles.titlelists}>
                        <h3>Tenho conhecimentos em:</h3>
                        </div>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>ReactJS</li>
                            <li>React Native</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Consumo de API</li>
                            <li>Git e GitHub</li>
                            <li>UX Design</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About