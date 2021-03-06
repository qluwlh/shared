# 快速排序总是背了忘忘了背？教你一行代码来搞定！

Talk is cheap. Show me the code
#### 实现
```js
const sort = ([h, ...t]) => h === undefined ? [] : [...sort(t.filter((item) => item <= h)), h, ...sort(t.filter((item) => item > h))];
```
确实是一行就实现了，为了方便查看，格式化一下

```js
const sort = ([h, ...t]) =>
  h === undefined ? []                          // 边界条件，已然有序
    : [
        ...sort(t.filter((item) => item <= h)), // 较小的子序列
        h,                                      // 基准
        ...sort(t.filter((item) => item > h)),  // 较大的子序列
      ];
```

一句话来说就是挑选基准值，小的放左边，大的放右边，再分别递归排列左边的和右边的

当然，这是在没有考虑空间复杂度的情况下，为了让你快速理解和记忆快速排序的基本的原理。

#### 原理

快速排序使用了分治的策略来把一个序列分为较小和较大的2个子序列，然后递归地排序两个子序列。

#### 步骤

- 挑选基准值：从数列中挑出一个元素，称为”基准“（pivot），上边我们采用了序列的head元素作为基准元素
- 分割：重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成
- 递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序
- 递归到最底部的判断条件是数列的大小是零或一，此时该数列显然已经有序。

#### 总结

看君一行代码，如看一行代码，只要基本原理拿捏住，再去查看和实现其它版本的快速排序，会不会很有帮助呢😄