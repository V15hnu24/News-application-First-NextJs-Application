import Head from 'next/head'

const Meta = ({title, keyword, description}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keyword} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}


Meta.defaultProps = {
    title: 'Vishnu News',
    keyword: 'Business, programming news, latest news, politics',
    description: 'This is my news channel'

}

export default Meta
