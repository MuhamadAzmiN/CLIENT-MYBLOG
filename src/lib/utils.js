import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow } from "date-fns";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



// export function formatPostDate(date){
//   return new Date(date).toLocaleDateString("en-US", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric"
//   })
// }


export function formatPostDate(date) {
  const time = formatDistanceToNow(new Date(date), { addSuffix: true });
  return time.replace("about", "");
}


export function formatPostTime(date){
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })
} 