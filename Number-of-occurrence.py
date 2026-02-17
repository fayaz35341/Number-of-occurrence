class Solution:
    def countFreq(self, arr, target):
        # code here
        n=len(arr)
        def fisrt(arr,target):
            l=0
            h=n-1
            ans=-1
            while h>=l :
                mid= (l+h)//2
                if arr[mid]==target:
                    ans=mid
                    h=mid-1
                elif arr[mid]<target:
                    l=mid+1
                else:
                    h=mid-1
            return ans
        def second(arr,target):
            l=0
            h=n-1
            ans=-1
            while h>=l :
                mid= (l+h)//2
                if arr[mid]==target:
                    ans=mid
                    l=mid+1
                elif arr[mid]<target:
                    l=mid+1
                else:
                    h=mid-1
            return ans
        if second(arr,target)==-1 or fisrt(arr,target)==-1:
            return 0
        else:
            return second(arr,target) -fisrt(arr,target)+1
