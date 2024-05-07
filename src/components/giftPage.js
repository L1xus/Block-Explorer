export default function GiftPage() {
    return (
        <div className='Header'>
          <div className='giftWinner'>
              <h2>The reward has been claimed by @ahr2510!</h2>
              <img src={process.env.PUBLIC_URL + '/gibaway.jpg'} alt='gibaway-winner' id='gibWinner'></img>
          </div>
          <div className="koksal">
            <img src="https://media1.tenor.com/m/YbXVv1nPb7oAAAAd/koksal-koksalbaba.gif" alt="Koksal Koksalbaba GIF" className="koksal"></img>
          </div>
        </div>
    );
}
