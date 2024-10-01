function LittleLemonChat(props) {
    const [status, chatStatus] = useState('offline');

    useEffect(() => {
      LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'))

      return () => {
        setStatus('offline');
        LemonChat.unsubscribeFromMessages(props.chatId);
      };
    }, []);
 
    // ...
}