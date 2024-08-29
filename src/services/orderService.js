import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const remove = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`)
}

const orderService = { getAll, remove }

export default orderService