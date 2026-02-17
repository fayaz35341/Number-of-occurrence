/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countFreq(arr, target) {
        // code here
        let n=arr.length
        function fisrt(arr,target){
            let l=0
            let h=n-1
            let ans=-1
            while (h>=l) {
                let mid=Math.floor((l+h)/2)
                if (arr[mid]==target){
                    ans=mid
                    h=mid-1
                }
                else if (arr[mid]<target){
                    l=mid+1
                }
                else{
                    h=mid-1
                }
            }
            return ans
        }
        function second(arr,target){
            let l=0
            let h=n-1
            let ans=-1
            while (h>=l) {
                let mid= Math.floor((l+h)/2)
                if (arr[mid]==target){
                    ans=mid
                    l=mid+1
                }
                else if (arr[mid]<target){
                    l=mid+1
                }
                else{
                    h=mid-1
                }
            }
            return ans
        }
        let s=second(arr,target)
        let f=fisrt(arr,target)
        if (f ===-1) return 0
        
        return s-f+1
        
    }
}
