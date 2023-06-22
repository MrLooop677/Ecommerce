import baseUrl from "../Api/baseURL";

const useGetData = async (url, param) => {
  const data = await baseUrl.get(url, param);
  return data.data;
};
export default useGetData;
