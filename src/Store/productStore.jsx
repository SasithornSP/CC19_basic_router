import{create} from 'zustand'

    const AomjungStore=()=>({
        firstName:'Sasithorn',
        lastName:'sp',
        address:{street:'1234',zipcode:'567'}
    })
    const useAomjungStore=create(AomjungStore)

export default useAomjungStore