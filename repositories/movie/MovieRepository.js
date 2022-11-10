import Factory from "@/repositories/Factory";
const resource = '/v1/movies'

export default ($axios) => Factory($axios)(resource)
