import axios from "axios";

const base_url = "http://127.0.0.1:5000/";
export default {
    async getCurrentStocks(headers, body) {
        return await axios
          .post(base_url+ "current", body, {
            headers: headers,
          })
          .catch(function(error) {            
            throw new Error(error.response.data);
          });
      },
      async getStocksHistory(headers, body) {
          return await axios
            .post(base_url+ "history", body, {
              headers: headers,
            })
            .catch(function(error) {            
              throw new Error(error.response.data);
            });
        },
        async getForecast(headers, body) {
            return await axios
              .post(base_url+ "forecast", body, {
                headers: headers,
              })
              .catch(function(error) {            
                throw new Error(error.response.data);
              });
          },
       async getPredictables(body, headers) {
            return await axios
              .post(base_url+ "predictables", body,{
                headers:headers
              })
              .catch(function(error) {  
                throw new Error(error.response.data);
              });
          },
}