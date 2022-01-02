---
title: How to become a Blockchain developer?
slug: become-a-blockchain-developer
date_published: 2018-07-26T05:44:08.000Z
date_updated: 2018-07-26T05:53:34.000Z
tags: [blockchain, developer, bitcoin, ethereum, smart-contract]
description: Many people come to me ask about how they should proceed to become a developer in the blockchain space. I thought it would be a good idea to put down my thoughts in a post so that I can easily refer people to this.
---

Many people come to me ask about how they should proceed to become a developer in the blockchain space. I thought it would be a good idea to put down my thoughts in a post so that I can easily refer people to this.

As many of you may be aware, blockchain and cryptocurrencies are the craze these days and everybody wants to understand what they are all about. IMO, the current interest is overhyped. [Blockchain is not the solution](http://blog.pranay01.com/blockchain-not-solve-everyhting/) to every problem we are facing today. But to discard them as just another hype would be a mistake. At the least, it warrants a careful examination of how they can change the world.

To me, blockchain represents a fundamental way in which we think about cooperation and trust in society and are a [foundational technology.](http://blog.pranay01.com/blockchain-foundational/) Maybe it will not have any significant impact in the short term (1-2 yrs), but it will significantly alter the tech landscape in medium to long-term (5-10 yrs).

> So, if you are really interested in this space, think for the **long-term**

Now let's get to the question of how can one start to learn about this space and become a "blockchain developer". I am assuming that you already are a developer/ have capability to code but in some other domain. Maybe you are an Android dev or a react dev or work on any of the other myriad technologies out there.

The beauty about this space is that most of the exciting development in blockchain space happens in open source. If you want today, you can look into the source code of bitcoin and figure out how it exactly works. Of course, you need to be able to understand the source code written by other people, which is not trivial.

Github repos for popular projects

[Bitcoin](https://github.com/bitcoin/bitcoin)
[Ethereum](https://github.com/ethereum/)
[HyperLedger](https://github.com/hyperledger/fabric)

Also, the blockchain and crypto community is very open and most of the discussions happen over Github issues, telegram groups, Reddit or mailing lists.

To get started, you have to get a broad understanding of what is blockchain, how its different from traditional technology, what is consensus, etc. You need not understand all this in great detail, but you should have a hang of it. In my opinion, starting with Bitcoin and Ethereum are the best way to learn about all this. For the first 15-20 days, just leave everything else and try to understand how does bitcoin and Ethereum work and what are the various concepts involved. Don't get into coding yet, as that is the simpler part and would be easier once you have the basic concepts sorted.

The best resource for learning these concepts is **[http://www.bitcoin.cc/](http://www.bitcoin.cc/)**

It has lots of explanatory videos and articles. It is more focused on bitcoin but does a good job of explaining the basics.

Once you are done with this, head on to Ethereum Github and digest its [white paper](https://github.com/ethereum/wiki/wiki/White-Paper)

> This [repo](https://github.com/Xel/Blockchain-stuff) also has a lot of good resources on blockchain aggregated in a single place.

Now, to become a developer you need to understand that there are primarily 2 types of blockchain networks.

**1. Permissioned networks

2. Permissionless networks**

In *permissionless networks*, anybody can go ahead and start a node and start mining blocks and participate in the network. Good examples of such networks are Ethereum and Bitcoin

In *permissioned networks*, only those people who are authorised can run a node which contributes to the network. Such networks are more suited for business use cases, where a business or different parties involved in a business run nodes for the network.

The important thing to note here is that the identities of these nodes are known and everybody in the network knows who is running a particular node. This makes the job of achieving a consensus much easier. If you want to run permissioned networks, HyperLedger is a good project to follow.

From a developer perspective, there are few **opportunities** in this space:

1. 
***Build permissioned networks for businesses***

Many businesses are trying to understand how they can use blockchain in their use cases. For example, a car manufacturing company may want to use blockchain for their supply chain. Such business use cases, mostly need a permissioned network as the nodes who will operate in the network are mostly known.

[Hyperledger Fabric](https://github.com/hyperledger/fabric) is a good protocol to develop permissioned networks. To get started, go through its [documentation](https://hyperledger-fabric.readthedocs.io/en/release-1.2/). Its decently well explained and should give you a good foundation to start with.

2. 
***Build decentralised protocols***

A lot of research goes into the different type of protocols which are used by the blockchain. Things like which consensus mechanism should be used, what should be the tradeoffs between scalability and trustlessness and how the incentives for different players should be aligned.

These are the sort of things which core developers of Bitcoin and Ethereum worry about. For getting involved in such work, you need to have strong CS and Math chops. You can start getting involved with building protocols by contributing to the [Bitcoin](https://github.com/bitcoin/bitcoin/) or [Ethereum](https://github.com/ethereum/go-ethereum) project and build your way from there.

3. 
***Build dApps on existing protocol***

The third kind of thing which you can do is to focus on building dApps and smart contracts. dApps are [Decentralised Applications](https://en.wikipedia.org/wiki/Decentralized_application) which run on existing protocol. Ethereum is the easiest way to get started on this. Ethereum uses a language called Solidity which is similar to Javascript and any frontend developer can easily try to start dabbling in it. Solidity also has a great [documentation](http://solidity.readthedocs.io/en/v0.4.24/) which can help you get started.

This is also the domain of ICOs. Most Ethereum based ICOs need a smart contract which encodes the logic of their platform. So developers can get projects developing smart contracts for clients who want to do ICOs.

Apart from Ethereum, there are many new protocols which have come up like [Stellar](https://www.stellar.org/), [EOS](https://eos.io/), etc. Each protocol has made its own set of trade-offs which makes it suitable for particular projects. But I would suggest if you are just starting in this field, start with Ethereum - as it has the highest number of devs working on it and most simple queries you may have can easily be solved by searching on Google or StackOverflow.

[Dedicated StackExchange for Ethereum
](https://ethereum.stackexchange.com/)[Dedicated StackExchange for Bitcoin
](https://bitcoin.stackexchange.com/)

While trying to learn about blockchain, keep in mind that development for decentralised web (blockchains, etc.) is very different from the standard centralised development which most developers are used to. So, in the early days, you may have to break your head trying to get an intuition for how it works. But don't get disappointed and lose hope.

Blockchain community is very open and helpful and if you are stuck in some place, just ask. Post it on relevant forums on [Reddit](https://www.reddit.com/r/BlockChain/), telegram, StackOverflow etc. and I am sure somebody will help you.

All the best in your learning journey! Give a shout out to me on [twitter](https://twitter.com/pranay01/) if you need any help.
