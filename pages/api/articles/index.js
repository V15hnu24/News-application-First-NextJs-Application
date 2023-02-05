import { articles } from '../../../data'

export default function handler(req, res) {

    console.log("In the articles api route")
    res.status(200).json(articles)
}
