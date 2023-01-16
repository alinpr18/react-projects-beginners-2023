import './User.css'

export function User({ username, avatar, url }) {
  return (
    <li className="user-container">
      <img src={avatar} alt={username} />
      <a href={url} target="_blank" rel='noopener noreferrer'>{username}</a>
    </li>
  )
}
