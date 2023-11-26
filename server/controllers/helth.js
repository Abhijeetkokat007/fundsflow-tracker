const getApiHelth = async( req, res)=>{
    res.status(200).json({
        success:true,
        message: "ok"    })
}

export {getApiHelth} ;