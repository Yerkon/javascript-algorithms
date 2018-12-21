export default class TrieNode {
    constructor(character, isCompletedWord = false){
        this.character = character;
        this.isCompletedWord = isCompletedWord;
        this.children = {};
    }
    
    
   /**
   * @param {string} character
   * @param {boolean} isCompleteWord
   * @return {TrieNode}
   */
    addChild(character, isCompleteWord = false) {
        this.children[character] = new TrieNode(character, isCompleteWord);     
        
        return this.children[character];
    }
    
   /**
   * @param {string} character
   * @return {TrieNode}
   */
    getChild(character) {
        return this.children[character];
    }
    
   /**  
   * @return {string[]}
   */
    getChildren(){
        return Object.keys(this.children);
    }
    
    toString() {
        let resultArr = [];
        let currNode = this;
        let childrenArr = this.getChildren();
       
        
        for(let i = 0; i < childrenArr.length; i++){
            
            while(currNode){
                let childCharacter = childrenArr[i];
                let childNode = currNode[childCharacter];
                resultArr.push(childCharacter);
            }
            
            resultArr.push('end of', i);
        }
        
        console.log(resultArr);
    }
}