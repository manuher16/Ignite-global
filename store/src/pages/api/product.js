import _axios from "@/common/axios"

export async function getCatalog() {
    try {
        const res = await fetch('https://api.bigcommerce.com/stores/s9ye4xe3x0/v3/catalog/products', {
            headers: {
                "X-Auth-Token": "wo9e40w72wf7f21kpz3xfgfiwmeffz"
            }
        })
        const posts = await res.json()
        return posts
    } catch (error) {
        console.log(error.request)
        return {}
    }
}