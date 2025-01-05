import { useEffect, useState } from 'react';

interface UserData {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const [userId, setUserId] = useState<number>(1);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    setTotal(count * 5);
  }, [count]);

  useEffect(() => {
    const T = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(T);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error('网络请求失败');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <>
      <div>
        count:{count}, total:{total}
      </div>

      <div>
        <h1>用户信息</h1>
        <label>
          输入用户ID:
          <input
            type="number"
            value={userId}
            onChange={(e) => {
              setUserId(parseInt(e.target.value));
            }}
          ></input>
        </label>
        {loading && <p>加载中...</p>}
        {error && <p>错误: {error}</p>}
        {userData && (
          <div>
            <p>姓名: {userData.name}</p>
            <p>邮箱: {userData.email}</p>
            <p>用户名: {userData.username}</p>
            <p>电话: {userData.phone}</p>
            <p>网站: {userData.website}</p>
          </div>
        )}
      </div>
    </>
  );
}
