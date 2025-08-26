import rateLimit from "../config/upstash.js";



const rateLimiter = async (req,res,next) => {
    //per use => username
    try {
        const {success} = await rateLimit.limit("my-rate-limit")

        if(!success){
            return res.status(429).json({
                message : "Too many request, please try again later"
            })
        }
        next()
    } catch (error) {
        console.log("Rate Limit error",error);
        next(error);
    }
}

export default rateLimiter;