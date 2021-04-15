## Kafka

`kafka`是一个分布式发布订阅消息系统，这里我们使用`kafkajs`来实现数据的发送和消息的订阅处理

> 默认已经安装好`docker`，`node`，`yarn`和`typescript` 

### 安装kafka和zookeeper

```bash
$ docker-compose up --no-recreate
```

> 关于为什么要添加`--no-recreate` ，查看[#516](https://github.com/wurstmeister/kafka-docker/issues/516) 和[`Broker IDs`](https://github.com/wurstmeister/kafka-docker#broker-ids) 

### 安装依赖

```bash
$ yarn
```

### 开发模式

```bash
$ yarn run all
```
