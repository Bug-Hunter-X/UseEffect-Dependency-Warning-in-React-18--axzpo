```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    
    return () => clearInterval(intervalId); 
  }, []); //Fixed: No extra dependencies needed here

  return <div>Count: {count}</div>;
}
```