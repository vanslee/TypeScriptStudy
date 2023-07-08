# node -v

# npm install -g typescript

# tsc --version

# 创建 tsconfig.json

```json
01 {
02     "compilerOptions": {
03         "strict": true,
04         "target": "es5"
05       }
06 }
```

# 创建 hello-world.ts 文件

```ts
const greeting = "hello, world";
console.log(greeting);
```

# 设置默认构建任务

> 为了便于以后多次运行、编译 TypeScript 命令，我们可以将“tsc: build - tsconfig.json”设置为默认构建任务。使用快捷键“Ctrl + Shift + B”打开运行构建任务面板，点击右侧齿轮形状的配置按钮打开任务配置文件

## 创建 task.json

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": ["$tsc"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

## 快捷键`Ctrl + Shift + B`就能自动将 ts 文件转成 js 文件
