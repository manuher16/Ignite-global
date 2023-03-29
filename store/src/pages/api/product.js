import _axios from "@/common/axios"

export async function getCatalog() {
    try {
        const res = await fetch('https://api.bigcommerce.com/stores/s9ye4xe3x0/v3/catalog/products', {
            method: 'GET',
            headers: {
                "X-Auth-Token": "wo9e40w72wf7f21kpz3xfgfiwmeffz"
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.request)
        return {}
    }
}