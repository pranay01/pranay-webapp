---
title: STOP! Blockchain can't solve Everything
slug: blockchain-not-solve-everyhting
date_published: 2018-03-21T14:30:00.000Z
date_updated: 2018-03-22T06:25:17.000Z
tags: [blockchain, bitcoin, ethereum, ICO]
description: Blockchain on the face of it is needed to prevent the problem of double spending in a trustless environment. Only when there are multiple parties involved and there is a problem of trust between them, does applying blockchain based solutions help.
---

Recently I have been attending a few conferences and meetups focusing on blockchain and its application. While its good that this technology is getting attention in India, I really believe that we need to do a better job at understanding this technology. Many times I come across propositions which intend to apply blockchain to something which doesn't really need blockchain. While part of this may be fuelled by the recent ICO craze, but mostly its lack of effort on our part to get into the depth and really understand what this technology entails.

Blockchain on the face of it is needed to prevent the problem of double spending in a trustless environment. Only when there are multiple parties involved and there is a problem of trust between them, does applying blockchain based solutions help.

Some points to keep in mind before applying blockchain to any system:

**1. Blockchain is not needed for "immutability"**

The use of blockchain as an immutable ledger is so well advertised that people think that just the use case of creating an immutable database is enough to justify using a blockchain.

But "immutability" is a nuanced concept which we will see below.

Designing atabases which are immutable by design is an age old concept. More commonly known as append-only databases, there have been many attempts to create such databases. Google's Big Query, RethinkDB and CouchDB created databases which were append only by design but they had to allow for garbage collection/updation as such databases blowup in size quickly.
[Datomic](https://www.datomic.com/) is an existing database which is append only by design. This allows for auditing how and where changes were made.

[Here](https://www.xaprb.com/blog/2013/12/28/immutability-mvcc-and-garbage-collection/) is a good discussion on immutable databases and a [discussion](http://usblogs.pwc.com/emerging-technology/the-rise-of-immutable-data-stores/) on where such databases can be used.

The thing to keep in mind is that these append-only databases are not immutable if the admin can be an attack vector. As these databases are at the end of the day stored in hard drive of a central server, it can always be edited.

Content addressable datastores like [IPFS](http://ipfs.io) can be used securely store data as in that case a file is addressed by a unique hash. If the data stored in the file is changed in any way, then it will no longer have the same hash. The only issue is that these hashes need to be stored in a secure way in a database and this introduces a vulnerability.

If you use blockchain, it gives you protection from the admin being an attack vector, as there is no single copy of the database which can be edited. The database is present in distributed nodes and the truth is determined by the consensus mechanism like[ Proof-of-Work, Proof-of-Stake](https://blockgeeks.com/guides/proof-of-work-vs-proof-of-stake/), etc. and not based on what is written in a single node.

Thus, "immutability" is not a singleton concept but a spectrum. Depending upon what your attack models are and the level of data protection and trustlessness you need, there can be different solutions which serve the purpose, and are more efficient.

**2. Its very hard to make blockchain work with the "Wet World"**

Wet world here is referring to the physical/offline world. Things which are not digital are tough to be represented on blockchain in a non-repudiable manner. Blockchain operates in the world of bits, while the physical world is made of atoms.

Blockchain doesn't  know about what is happening in the world. For example, there is no information on the blockchain if a particular team won a game or not. For this information to be available to the blockchain, there needs to be a service which pushes this data on the blockchain. Such services are called *Oracles*. Having trustworthy Oracles which pushes correct data on the blockchain is a non-trivial problem. According to Nick Szabo, trusted third parties are [security loopholes](http://nakamotoinstitute.org/trusted-third-parties/).

Tracking items in supply chain on blockchain also faces this bottleneck. Since, the items which are transported in a suppychain are physical/"wet" accurately identifying them on blockchain is challenging. Generally such items are tagged with digital ID like RFID, barcode, etc. But it is easy to tamper with such digital IDs externally applied on an object. Unless the object itself has a digital signature (like diamond fingerprint, explained in more detail below), any external ID which is applied on an object can be tampered with or copied.

In a use case which we recently built, we wanted to track a crate of mangoes across different part of supply chain. We can do this by attaching a bar code to each crate, and tracking that barcode in blockchain. The problem is that, this barcode can easily be copied and attached to another crate. If there are no other checks and balances, this system will fail given that participants have enough incentive to fool the system.

There are some projects like [Slock.it](http://slock.it) which use locks on physical objects e.g bicycle to make them operable using smart contracts. Though how secure these locks are which can be operated digitally is an area of examination. If there is enough incentive, can't that lock itself be removed? Then there will be no way to track these assets on blockchain.

On the other hand, in cases where the object itself has a digital fingerprint, this problem doesn't exist. For example, in case of diamond, shining a laser light on it in a particular way produces a diffraction pattern which is unique signature of a diamond. This unique pattern can be hashed and tracked on blockchain.

![Diamond Refraction Pattern](/img/2018/03/Screen-Shot-2018-03-20-at-1.14.05-PM.jpg)
*Diamond Refraction Pattern*

**3.You don't need blockchain for tokenization**

Recently I met a gentleman who was suggesting how blockchain will change the face of small businesses in India. Now, a Pizza shop can issue a Pizza Token(PT) and ask to be paid in them. His regular customers can buy the tokens and pay him in PT whenever they order pizza from him.

On the face of it, it sounds like a genuine use case. But when we dig deeper, it soon becomes clear that there is no need of a blockchain here. Even today Ola issues Ola money which is nothing but a token which can be used only in Ola platform. The company running the service (Ola) can issue tokens for fiat, which can be redeemed by token holders in the platform. In the process, some discount is given to users for using Ola Money.

Since, we are trusting the service provider, there is no need of blockchain here. This of course leads to issues where the service provider can arbitrarily change the number of tokens needed for a service, or there being no external market for Ola money tokens (at least no formal markets)

Of course, one advantage of tokens is that you can realise your revenue before actually providing the service - but since there is no external market for such tokens, there is no speculation and trading activity which happens in case of crypto tokens.

**4. In many cases, centralised services work just fine**

You don't need decentralization for everything. If you trust a service provider, there is no need for decentralization. Only when there are multiple parties involved, who don't trust each other, there can be a case of decentralised applications.

Decentralised networks also have their own problems. Decentralised networks are more resilient as they don't have a single point of failure. But they suffer from effects like [Braess's Paradox](https://en.wikipedia.org/wiki/Braess%27s_paradox) Braess's paradox demonstrates how adding a new high-speed road in a road network can lead to more congestion, than without the new road. So, in some cases a central planning, which has view of the complete system, may make more sense than decentralised systems which don't have any global optimization function.

Scientists have also [shown](https://www.rdmag.com/news/2012/09/study-solar-and-wind-energy-may-stabilize-power-grid) how decentralised power grids can also suffer from similar problems.

**5. Centralised services will always have better speed and efficiency**

If speed and efficiency are your main concern, blockchain based solutions may not be the ideal choice.

Visa averages around 2,000 tps, with a peak capacity of perhaps [50,000 tps](https://due.com/blog/can-the-blockchain-scale/) Google currently processes [ 65,000 ](http://www.internetlivestats.com/one-second/#google-band) queries per second. By design, it is very difficult to achieve such rates for distributed networks

On the other hand, Bitcoin is limited to [3-7 transactions per second](https://github.com/ethereum/wiki/wiki/Sharding-FAQ) and Ethereum to 7-15 tx per second.

Here's a graph of transactions taking place in the Ethereum network

![Ethereum transaction](/img/2018/03/Screen-Shot-2018-03-20-at-1.33.46-PM.jpg)

So, around [700K transation](https://etherscan.io/chart/tx) are made on Ethereum everyday, which comes down to 8.1 transactions per second. At its peak, Ethereum network had processed ~1.3 mn tx per day, which is around 15 tx per second

Although there are efforts to scale these system for processing more number of transactions, they will never achieve the speed of centralised systems.

Ethereum is focussing on sharding to achieve high TPS while [Lightning Network ](https://lightning.network/)is bitcoins bet to scale the number of transactions processed by creating off chain channels.

Proof of stake protocols can achieve higher number of transactions per second as they don't involve miners but only validators. Ethereum's POS protocol Casper for example will have an expected time of 4s per block in starting.

If we assume that number of tx per block is same as current, which is 150 tx/block, then the throughput with casper would be 37.5 tx per second. This is much better than current state, but still leaves much to be desired.

Since, by design any blockchain based system would involve coordination cost between different nodes, which need to be sure that only authentic transactions are being processed by the network, they would be slower than a single server processing all the transactions. The benefit such network though provides is that of trust between nodes, which is absent in a centralised system.

Only in those systems where the benefits due to increase in trust outweighs the loss in speed and efficiency, do blockchain makes sense.

---

Thanks [Nilesh](https://twitter.com/nileshtrivedi) for reviewing the initial draft of this post.
