export default function secondsAgo(s) {
if (!s) return null;
  const seconds = Math.ceil((Date.now() - s * 1000) / 1000);
  return seconds > 60 ? Math.floor(seconds / 60) + "minutes ago" : seconds + " seconds ago";
};