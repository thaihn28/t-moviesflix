export const scrollToTop = () => {
  if(process.client){
    window.scrollTo(0, 0);
  }
}
