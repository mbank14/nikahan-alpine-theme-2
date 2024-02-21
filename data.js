const data = () => {
    return {
        data: {
            undangan: null,
            // acara_lain: null,
        },

        async init(){
            await fetch('./data.json')
                .then(res => res.json())
                .then((data) => this.data.undangan = data)
                    // data.acara.acara_lainya.forEach(element => {
                    //     this.data.acara_lain = element
                    // });
                    // console.log(element)
                // .then((data) => this.data.undangan = Object.values(data))
        }
    }
} 