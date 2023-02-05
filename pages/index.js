import {server} from '../config'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      {/* <Head>
        <title>First next app</title>
        <meta name="description" content="First next app" />
      </Head> */}
      {/* 
      <h1>First next app</h1>
      {articles.map(article => (
        <h3>{article.title}</h3>
      ))} */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }