# Git 命令

#### 1、基本命令
```js
git clone ssh地址|http地址      # 克隆远程项目至本地仓库
git add .                       # 添加当前目录全部文件至暂存区
git commit -m "提交说明"        # 提交暂存区文件至本地仓库

git log                         # 查看提交日志
git status                      # 查看仓库当前状态，显示有变更的文件
git diff                        # 比较文件在暂存区和工作区差异
git rm a.txt                    # 将a文件从暂存区和工作区中删除

```


#### 2、推送文件至远程分支
```js
git push origin master  # 推送文件至远程master分支
git push -f             # 强制推送，会覆盖分支文件
```


#### 3、拉取远程分支代码
```js
git pull                # 默认从当前配置的远程仓库（通常是origin）中拉取并合并当前分支的更新
git pull origin master  # 指示Git从origin远程仓库拉取master分支的最新提交
```


#### 4、处理本地和仓库冲突，先暂存本地，在拉取代码，在解除暂存
```js
git stash      # 暂存本地修改
git pull       # 拉取最新代码
git stash pop  # 解除暂存
```

#### 5、回退版本。
```js
git reset HEAD^            # 回退所有内容到上一个版本
git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本
git reset 052e             # 回退到指定版本

git reset --hard 7aac060f8e82d97bee2bf0730fb7d51a0cfc606e # 回退到指定版本，并清空暂存区和工作区
```


#### 6、分支操作。
``` js
git merge 2022-10-27-14.36  # 合并分支，（将2022-10-27-14.36合并到当前分支）
git checkout dev            # 切换分支（切换分支到dev）
git branch                  # 列出所有分支列表
git branch  a               # 创建一个分支a
git branch -r               # 查看远程分支
git branch -a               # 查看所有分支（包括远程分支）
git branch -d a             # 删除a分支（要先选到其他分支才可以）
git branch -D a             # 删除远程的分支     


git tag -a V2.6.5_0105 -m "0105定版代码合入"  # 打tag
git push origin V2.6.5_0105                   # 推送到远程

```
 


