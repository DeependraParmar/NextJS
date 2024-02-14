const handler = async(req,res) => {
    if(req.method === 'GET'){
        res.status(200).json({
            success: true,
            message: "I am working fine here.",
        })
    }
}

export default handler;