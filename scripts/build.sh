#目录删除 之前打包 dist
#创建子应用相应的文件夹
rm -rf ./dist
mkdir ./dist

#mian 基座
cp -r ./main/build/* ./dist
#sub-react
cp -r ./sub-react/build/ ./dist/sub-react/
#sub-vue
cp -r ./sub-vue/dist/ ./dist/sub-vue/
#sub-html
cp -r ./sub-html/dist/ ./dist/sub-html/

echo "build.sh execute success."