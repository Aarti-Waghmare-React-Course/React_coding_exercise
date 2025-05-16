// Filter Long Words in a List
// Display only the words that are longer than 3 letters.

const ListWordFilter_16 = () =>{
    const words = ['Hello','Is','Elephant','am','why','how','react'];

    const LongWord = words.filter((word)=>word.length>3);


    return(
          <div>
           {
            LongWord.map((word,index)=>(
                <li key={index}>{word}</li>
            ))
           }
          </div>
    );
};

export default ListWordFilter_16;