
import { FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Carlos Vilchez" />
                <meta name="description" content={`Información sobre el pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokémon, pokedex, pokédex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es una página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '20px'
            }}>
                {children}
            </main>
        </>
    )
}
