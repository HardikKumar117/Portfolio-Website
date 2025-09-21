import { create } from 'zustand';
export const useCounterStore = create((set)=> ({
count: 0,
inc: () => set((state) => ({ count: state.count + 1 })),
dec: () => set((state) => ({ count: state.count -1 })),
// data:[],

// fetchData :async ()=>{
//     const response = await fetch('https://fakestoreapi.in/api/products');
//     const result = await response.json();
//     set({data: result});
// }

}))

  
 