跟大家说一件真实的事情
我们网站的流量虽然不大， 但是经常发现网站会卡住。
就是半分钟，甚至一分钟左右没有响应， 查了各种日志， 都没发现异常。
后来有人报告每次删除帖子之后必定会卡住
我用mysqladmin查看mysql的process list
一个delete查询也就花了0.00几秒就完成了。
但是一些简单的select查询, 平时也就0.几秒就能完成的， 此时却是卡住不动了。
实在是百思不得其解。

后来经过我的深入研究，以及机缘巧合。
最终我找到了原因。
原因是mysql的查询缓存是打开的
当我关闭mysql的查询缓存后，再也没有出现过网站卡住的问题。
mysql默认的设置，这个设置就是打开的。
据说最新版的mysql已经默认关闭了这个设置。

究其原因，就是mysql的查询缓存机制太简单粗暴， 就是每次把select的结果缓存下来，一旦表有更新， 就会失效整个缓存。
对于一个有几千万条数据的表， 这个过程是相当耗时的。
而且在日志中还找不到相关的信息，导致问题一直没有解决。
一般来说，一些耗时的查询我们都会在程序端做了缓存， mysql自带的缓存其实是画蛇添足的， 根本没什么用。

如果各位有类似的问题， 请注意下mysql的这个设置。切记关闭。