// export const wheelHandler = (e) => {
//   e.preventDefault();
//   const { deltaY } = e;
//   const { scrollTop } = outerDivRef.current;
//   const pageHeight = window.innerHeight; //화면 세로길이

//   if (deltaY > 0) {
//     if (scrollTop >= 0 && scrollTop < pageHeight) {
//       outerDivRef.current.scrollTo({
//         top: pageHeight + DIVIDER_HEIGHT,
//         left: 0,
//         behavior: "smooth",
//       });
//     } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
//       outerDivRef.current.scrollTo({
//         top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
//         left: 0,
//         behavior: "smooth",
//       });
//     } else {
//       console.log("현재 3페이지, down");
//       outerDivRef.current.scrollTo({
//         top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
//         left: 0,
//         behavior: "smooth",
//       });
//     }
//   } else {
//     if (scrollTop >= 0 && scrollTop < pageHeight) {
//       outerDivRef.current.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
//       outerDivRef.current.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     } else {
//       outerDivRef.current.scrollTo({
//         top: pageHeight + DIVIDER_HEIGHT,
//         left: 0,
//         behavior: "smooth",
//       });
//     }
//   }
// };
// //   const outerDivRefCurrent = outerDivRef.current;

// //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
// //   return () => {
// //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
