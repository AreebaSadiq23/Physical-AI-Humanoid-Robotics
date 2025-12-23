---
title: "Module 1: The Robotic Nervous System (ROS 2)"
sidebar_label: 'ROS 2 Fundamentals'
---

# Module 1: The Robotic Nervous System (ROS 2)

Welcome to the first module of our journey into Physical AI and Humanoid Robotics. This module is dedicated to the **Robot Operating System (ROS 2)**, which can be thought of as the central nervous system for our robots. Just as a nervous system allows different parts of a body to communicate and coordinate, ROS 2 provides the framework that enables the various hardware and software components of a robot to work together seamlessly.

خوش آمدید! یہ فزیکل اے آئی اور ہیومنائیڈ روبوٹکس میں ہمارے سفر کا پہلا ماڈیول ہے۔ یہ ماڈیول **روبوٹ آپریٹنگ سسٹم (ROS 2)** کے لیے وقف ہے، جسے ہمارے روبوٹس کا مرکزی اعصابی نظام سمجھا جا سکتا ہے۔ جس طرح ایک اعصابی نظام جسم کے مختلف حصوں کو آپس میں رابطہ اور ہم آہنگی کرنے کی اجازت دیتا ہے، اسی طرح ROS 2 وہ فریم ورک فراہم کرتا ہے جو روبوٹ کے مختلف ہارڈویئر اور سافٹ ویئر اجزاء کو بغیر کسی رکاوٹ کے مل کر کام کرنے کے قابل بناتا ہے۔

Throughout this module, we will explore the fundamental concepts of ROS 2, learn how to set up a development environment, and build basic robotic applications. By the end, you will have a strong foundation in ROS 2, preparing you for the more advanced topics in the modules to come.

اس ماڈیول کے دوران، ہم ROS 2 کے بنیادی تصورات کو تلاش کریں گے، ڈیولپمنٹ ماحول کو ترتیب دینے کا طریقہ سیکھیں گے، اور بنیادی روبوٹک ایپلی کیشنز بنائیں گے۔ آخر تک، آپ کے پاس ROS 2 کی ایک مضبوط بنیاد ہوگی، جو آپ کو آنے والے ماڈیولز میں مزید جدید موضوعات کے لیے تیار کرے گی۔

## Chapter 1: Introduction to ROS 2

### What is ROS 2?

The **Robot Operating System (ROS 2)** is not an operating system in the traditional sense, like Windows, macOS, or Linux. Instead, it is a **flexible, open-source middleware framework** designed to simplify the development of complex robotic applications. Think of it as a collection of software libraries, development tools, and conventions that provide the functionality you would expect from an operating system, but specifically for robots.

**روبوٹ آپریٹنگ سسٹم (ROS 2)** روایتی معنوں میں کوئی آپریٹنگ سسٹم نہیں ہے، جیسا کہ ونڈوز، میک او ایس، یا لینکس ہیں۔ اس کے بجائے، یہ ایک **لچکدار، اوپن سورس مڈل ویئر فریم ورک** ہے جو پیچیدہ روبوٹک ایپلی کیشنز کی ڈیولپمنٹ کو آسان بنانے کے لیے ڈیزائن کیا گیا ہے۔ اسے سافٹ ویئر لائبریریوں، ڈیولپمنٹ ٹولز، اور کنونشنز کا ایک مجموعہ سمجھیں جو وہ فعالیت فراہم کرتا ہے جس کی آپ آپریٹنگ سسٹم سے توقع کرتے ہیں، لیکن خاص طور پر روبوٹس کے لیے۔

At its core, ROS 2 helps manage the complexity of a robot's software by breaking it down into smaller, modular, and reusable components called **nodes**. These nodes can be responsible for anything from reading a sensor and controlling a motor to running a sophisticated navigation algorithm. ROS 2 then provides the communication "plumbing" that allows these nodes to exchange data and work together, even if they are running on different computers.

اس کے مرکز میں، ROS 2 روبوٹ کے سافٹ ویئر کی پیچیدگی کو **نوڈز (nodes)** نامی چھوٹے، ماڈیولر، اور دوبارہ قابل استعمال اجزاء میں تقسیم کرکے منظم کرنے میں مدد کرتا ہے۔ یہ نوڈز سینسر پڑھنے اور موٹر کو کنٹرول کرنے سے لے کر ایک جدید نیویگیشن الگورتھم چلانے تک کسی بھی چیز کے ذمہ دار ہو سکتے ہیں۔ ROS 2 پھر وہ مواصلاتی "پلمبنگ" فراہم کرتا ہے جو ان نوڈز کو ڈیٹا کا تبادلہ کرنے اور مل کر کام کرنے کی اجازت دیتا ہے، چاہے وہ مختلف کمپیوٹرز پر چل رہے ہوں۔

Key aspects that define ROS 2 as a framework include:

وہ کلیدی پہلو جو ROS 2 کو ایک فریم ورک کے طور پر بیان کرتے ہیں ان میں شامل ہیں:

- **Hardware Abstraction:** It provides a standard way to interface with a robot's hardware (sensors, actuators) without needing to worry about the low-level implementation details.
- **Inter-process Communication:** It offers robust mechanisms (like Topics, Services, and Actions) for nodes to communicate with each other.
- **Package Management:** It has a built-in system for managing software packages, making it easy to share and reuse code.
- **Rich Ecosystem of Tools:** It comes with a suite of powerful tools for debugging, visualizing, and simulating your robot.

- **ہارڈویئر ایبسٹریکشن (Hardware Abstraction):** یہ روبوٹ کے ہارڈویئر (سینسرز، ایکچویٹرز) کے ساتھ انٹرفیس کرنے کا ایک معیاری طریقہ فراہم کرتا ہے بغیر نچلی سطح کے نفاذ کی تفصیلات کے بارے میں فکر کرنے کے۔
- **انٹر-پروسیس کمیونیکیشن (Inter-process Communication):** یہ نوڈز کو ایک دوسرے کے ساتھ بات چیت کرنے کے لیے مضبوط میکانزم (جیسے ٹاپکس، سروسز، اور ایکشنز) پیش کرتا ہے۔
- **پیکیج مینجمنٹ (Package Management):** اس میں سافٹ ویئر پیکجز کو منظم کرنے کے لیے ایک بلٹ ان سسٹم ہے، جس سے کوڈ کا اشتراک اور دوبارہ استعمال آسان ہو جاتا ہے۔
- **ٹولز کا بھرپور ایکو سسٹم (Rich Ecosystem of Tools):** یہ آپ کے روبوٹ کو ڈیبگ کرنے، ویژولائز کرنے، اور سمیولیٹ کرنے کے لیے طاقتور ٹولز کے ایک سوٹ کے ساتھ آتا ہے۔

ROS 2 is the second generation of the framework, completely redesigned to address the needs of modern robotics, including real-time performance, enhanced security, and support for multi-robot systems and production environments.

ROS 2 فریم ورک کی دوسری نسل ہے، جسے جدید روبوٹکس کی ضروریات کو پورا کرنے کے لیے مکمل طور پر دوبارہ ڈیزائن کیا گیا ہے، بشمول ریئل ٹائم کارکردگی، بہتر سیکیورٹی، اور ملٹی روبوٹ سسٹمز اور پروڈکشن ماحول کے لیے سپورٹ۔

### Why is ROS 2 Used?

ROS 2 has become a standard in the robotics industry, not just for hobbyists and researchers, but for commercial and production-grade systems. Its adoption is driven by several key advantages that accelerate development and improve the final product.

ROS 2 صرف شوقیہ افراد اور محققین کے لیے ہی نہیں، بلکہ تجارتی اور پیداواری درجے کے نظاموں کے لیے بھی روبوٹکس کی صنعت میں ایک معیار بن گیا ہے۔ اس کو اپنانے کی وجہ کئی اہم فوائد ہیں جو ترقی کو تیز کرتے ہیں اور حتمی مصنوعات کو بہتر بناتے ہیں۔

- **Production Readiness:** Unlike ROS 1, which was primarily for research, ROS 2 was built from the ground up for reliability, security, and performance. It includes features like lifecycle management (allowing nodes to be managed and transitioned through states gracefully) and real-time capabilities, which are critical for dependable, real-world applications.

- **پیداواری تیاری (Production Readiness):** ROS 1 کے برعکس، جو بنیادی طور پر تحقیق کے لیے تھا، ROS 2 کو شروع سے ہی اعتبار، سیکیورٹی، اور کارکردگی کے لیے بنایا گیا تھا۔ اس میں لائف سائیکل مینجمنٹ (نوڈز کو منظم کرنے اور حالتوں کے ذریعے احسن طریقے سے منتقل کرنے کی اجازت دینا) اور ریئل ٹائم صلاحیتیں جیسی خصوصیات شامل ہیں، جو قابل اعتماد، حقیقی دنیا کی ایپلی کیشنز کے لیے اہم ہیں۔

- **Shortened Time to Market:** Robotics development is complex. ROS 2 provides a vast ecosystem of ready-to-use packages and tools for common robotics tasks like navigation, manipulation, and perception. By building on this existing foundation, companies can focus their engineering efforts on creating unique value rather than reinventing the wheel, significantly reducing development time and cost.

- **مارکیٹ تک رسائی میں کمی (Shortened Time to Market):** روبوٹکس کی ترقی پیچیدہ ہے۔ ROS 2 عام روبوٹکس کے کاموں جیسے نیویگیشن، مینیپولیشن، اور پرسیپشن کے لیے استعمال کے لیے تیار پیکجز اور ٹولز کا ایک وسیع ایکو سسٹم فراہم کرتا ہے۔ اس موجودہ بنیاد پر تعمیر کرکے، کمپنیاں اپنی انجینئرنگ کی کوششوں کو پہیے کو دوبارہ ایجاد کرنے کے بجائے منفرد قدر پیدا کرنے پر مرکوز کر سکتی ہیں، جس سے ترقی کا وقت اور لاگت نمایاں طور پر کم ہو جاتی ہے۔

- **Cross-platform Compatibility:** ROS 2 officially supports Linux, Windows, and macOS. This flexibility allows development teams to work on their preferred operating system and makes it easier to integrate robotic systems into diverse IT infrastructures. Furthermore, its design allows it to be used with embedded microcontrollers and real-time operating systems (RTOS).

- **کراس پلیٹ فارم مطابقت (Cross-platform Compatibility):** ROS 2 سرکاری طور پر لینکس، ونڈوز، اور میک او ایس کو سپورٹ کرتا ہے۔ یہ لچک ڈیولپمنٹ ٹیموں کو اپنے پسندیدہ آپریٹنگ سسٹم پر کام کرنے کی اجازت دیتی ہے اور روبوٹک نظاموں کو متنوع آئی ٹی انفراسٹرکچر میں ضم کرنا آسان بناتی ہے۔ مزید برآں، اس کا ڈیزائن اسے ایمبیڈڈ مائیکرو کنٹرولرز اور ریئل ٹائم آپریٹنگ سسٹمز (RTOS) کے ساتھ استعمال کرنے کی اجازت دیتا ہے۔

- **Decentralized Communication for Multi-robot Systems:** ROS 2 uses the **Data Distribution Service (DDS)** standard for its communication, which is a peer-to-peer middleware. This eliminates the single point of failure (the "ROS Master") that existed in ROS 1. This decentralized architecture is naturally more robust and scalable, making it ideal for coordinating complex tasks among multiple robots, such as in a warehouse fleet or a team of autonomous drones.

- **ملٹی روبوٹ سسٹمز کے لیے وکندریقرت مواصلات (Decentralized Communication for Multi-robot Systems):** ROS 2 اپنی مواصلات کے لیے **ڈیٹا ڈسٹری بیوشن سروس (DDS)** معیار کا استعمال کرتا ہے، جو ایک پیر-ٹو-پیر مڈل ویئر ہے۔ یہ اس واحد ناکامی کے مقام ("ROS ماسٹر") کو ختم کرتا ہے جو ROS 1 میں موجود تھا۔ یہ وکندریقرت فن تعمیر قدرتی طور پر زیادہ مضبوط اور قابل توسیع ہے، جو اسے گودام کے بیڑے یا خود مختار ڈرونز کی ٹیم جیسے متعدد روبوٹس کے درمیان پیچیدہ کاموں کو مربوط کرنے کے لیے مثالی بناتا ہے۔

- **No Vendor Lock-in:** As a completely open-source framework, ROS 2 gives developers the freedom to choose their hardware and software components. They can inspect, modify, and extend any part of the system to fit their specific needs, avoiding dependency on a single company's proprietary technology.

- **وینڈر لاک ان نہیں (No Vendor Lock-in):** ایک مکمل طور پر اوپن سورس فریم ورک کے طور پر، ROS 2 ڈیولپرز کو اپنے ہارڈویئر اور سافٹ ویئر اجزاء کا انتخاب کرنے کی آزادی دیتا ہے۔ وہ اپنی مخصوص ضروریات کے مطابق نظام کے کسی بھی حصے کا معائنہ، ترمیم، اور توسیع کر سکتے ہیں، کسی ایک کمپنی کی ملکیتی ٹیکنالوجی پر انحصار سے بچتے ہوئے۔

- **Strong Community and Industry Support:** ROS 2 is backed by a global community of developers, researchers, and companies. This vibrant ecosystem contributes a wealth of packages, provides support through forums, and ensures the framework continues to evolve to meet new challenges. Major industry players are investing in and adopting ROS 2, guaranteeing its relevance and longevity.

- **مضبوط کمیونٹی اور صنعتی سپورٹ (Strong Community and Industry Support):** ROS 2 کو ڈیولپرز، محققین، اور کمپنیوں کی ایک عالمی برادری کی حمایت حاصل ہے۔ یہ متحرک ایکو سسٹم پیکجز کی ایک دولت میں حصہ ڈالتا ہے، فورمز کے ذریعے مدد فراہم کرتا ہے، اور اس بات کو یقینی بناتا ہے کہ فریم ورک نئے چیلنجوں کا مقابلہ کرنے کے لیے تیار ہوتا رہے۔ صنعت کے بڑے کھلاڑی ROS 2 میں سرمایہ کاری اور اسے اپنا رہے ہیں، جو اس کی مطابقت اور لمبی عمر کی ضمانت دیتا ہے۔

### Core Concepts of ROS 2

At its heart, the ROS 2 framework is built around a few fundamental concepts that govern how a robotic system is structured and how its different parts communicate. Understanding these concepts is the key to mastering ROS 2.

ROS 2 فریم ورک کا مرکز چند بنیادی تصورات کے گرد گھومتا ہے جو اس بات پر حکومت کرتے ہیں کہ ایک روبوٹک نظام کس طرح تشکیل دیا جاتا ہے اور اس کے مختلف حصے آپس میں کیسے رابطہ کرتے ہیں۔ ان تصورات کو سمجھنا ROS 2 میں مہارت حاصل کرنے کی کلید ہے۔

Here is a high-level overview of the main components:

یہاں اہم اجزاء کا ایک اعلیٰ سطحی جائزہ ہے:

| Concept | Analogy | Purpose |
| :--- | :--- | :--- |
| **Nodes** | Organs in a body | The individual programs that perform specific tasks. |
| **Topics** | Radio stations | A one-way channel for continuously streaming data. |
| **Services** | A phone call | A two-way request/response for a quick action and answer. |
| **Actions** | Ordering food online | A two-way system for long-running tasks with feedback. |
| **Messages** | The language spoken | The data structures used to send information. |
| **Parameters**| Settings on an app | Configurable settings that can be changed on the fly. |

| تصور | تشبیہ | مقصد |
| :--- | :--- | :--- |
| **نوڈز (Nodes)** | جسم میں اعضاء | انفرادی پروگرام جو مخصوص کام انجام دیتے ہیں۔ |
| **ٹاپکس (Topics)** | ریڈیو اسٹیشنز | مسلسل ڈیٹا کی سٹریمنگ کے لیے یک طرفہ چینل۔ |
| **سروسز (Services)** | ایک فون کال | فوری کارروائی اور جواب کے لیے دو طرفہ درخواست/جواب۔ |
| **ایکشنز (Actions)** | آن لائن کھانا آرڈر کرنا | طویل عرصے تک چلنے والے کاموں کے لیے فیڈ بیک کے ساتھ دو طرفہ نظام۔ |
| **پیغامات (Messages)** | بولی جانے والی زبان | معلومات بھیجنے کے لیے استعمال ہونے والے ڈیٹا کے ڈھانچے۔ |
| **پیرامیٹرز (Parameters)**| ایپ پر سیٹنگز | قابل ترتیب سیٹنگز جنہیں فوری طور پر تبدیل کیا جا سکتا ہے۔ |

---
#### 1. Nodes (نوڈز)

A **Node** is the most fundamental building block of a ROS 2 system. It is an independent, executable process that performs a specific, well-defined task. You can think of a robot's software as being composed of many nodes, each acting like a specialized worker.

**نوڈ (Node)** ROS 2 نظام کا سب سے بنیادی تعمیراتی بلاک ہے۔ یہ ایک آزاد، قابل عمل عمل (executable process) ہے جو ایک مخصوص، اچھی طرح سے طے شدہ کام انجام دیتا ہے۔ آپ روبوٹ کے سافٹ ویئر کو بہت سے نوڈز پر مشتمل سمجھ سکتے ہیں، جن میں سے ہر ایک ایک ماہر کارکن کی طرح کام کرتا ہے۔

For example, in a mobile robot, you might have:
- A `camera_node` that captures images from a camera.
- An `image_processing_node` that detects obstacles in the images.
- A `motor_controller_node` that sends commands to the wheels.
- A `navigation_node` that plans a path from point A to point B.

ایک موبائل روبوٹ میں، آپ کے پاس ہو سکتا ہے:
- ایک `camera_node` جو کیمرے سے تصاویر حاصل کرتا ہے۔
- ایک `image_processing_node` جو تصاویر میں رکاوٹوں کا پتہ لگاتا ہے۔
- ایک `motor_controller_node` جو پہیوں کو کمانڈ بھیجتا ہے۔
- ایک `navigation_node` جو پوائنٹ A سے پوائنٹ B تک کا راستہ طے کرتا ہے۔

This modular approach makes the system robust and easy to debug. If the `camera_node` fails, the `motor_controller_node` might still be able to function, and the faulty node can be restarted without taking down the entire system.

یہ ماڈیولر نقطہ نظر نظام کو مضبوط اور ڈیبگ کرنے میں آسان بناتا ہے۔ اگر `camera_node` ناکام ہو جاتا ہے، تو `motor_controller_node` شاید اب بھی کام کر سکے، اور خراب نوڈ کو پورے نظام کو بند کیے بغیر دوبارہ شروع کیا جا سکتا ہے۔

---
#### 2. Communication: Topics, Services, and Actions (مواصلات: ٹاپکس، سروسز، اور ایکشنز)

Nodes communicate with each other using three primary mechanisms:

نوڈز ایک دوسرے کے ساتھ تین بنیادی میکانزم کا استعمال کرتے ہوئے بات چیت کرتے ہیں:

##### a) Topics (ٹاپکس)

**Topics** are used for asynchronous, one-way, publish/subscribe communication. They are ideal for continuous data streams.

**ٹاپکس (Topics)** غیر ہم وقت ساز (asynchronous)، یک طرفہ، پبلش/سبسکرائب مواصلات کے لیے استعمال ہوتے ہیں۔ یہ مسلسل ڈیٹا اسٹریمز کے لیے مثالی ہیں۔

- **Analogy:** A radio station.
- A **Publisher** node acts like a radio host, continuously broadcasting messages (data) on a named channel (the topic). It doesn't know or care who is listening.
- A **Subscriber** node acts like a listener who tunes into that specific radio station. It receives all messages broadcast on the topic.
- **Use Case:** A LiDAR sensor node continuously *publishing* scan data to a `/lidar_scan` topic, while a navigation node *subscribes* to it to detect obstacles.

- **تشبیہ:** ایک ریڈیو اسٹیشن۔
- ایک **پبلشر (Publisher)** نوڈ ریڈیو میزبان کی طرح کام کرتا ہے، جو ایک نامزد چینل (ٹاپک) پر مسلسل پیغامات (ڈیٹا) نشر کرتا ہے۔ اسے اس بات کا علم یا پرواہ نہیں ہوتی کہ کون سن رہا ہے۔
- ایک **سبسکرائبر (Subscriber)** نوڈ ایک سننے والے کی طرح کام کرتا ہے جو اس مخصوص ریڈیو اسٹیشن پر ٹیون کرتا ہے۔ یہ ٹاپک پر نشر ہونے والے تمام پیغامات وصول کرتا ہے۔
- **استعمال کا کیس:** ایک LiDAR سینسر نوڈ مسلسل `/lidar_scan` ٹاپک پر اسکین ڈیٹا *پبلش* کرتا ہے، جبکہ ایک نیویگیشن نوڈ رکاوٹوں کا پتہ لگانے کے لیے اسے *سبسکرائب* کرتا ہے۔

##### b) Services (سروسز)

**Services** are used for synchronous, two-way, request/response communication. They are used for tasks that require a direct and immediate answer.

**سروسز (Services)** ہم وقت ساز (synchronous)، دو طرفہ، درخواست/جواب مواصلات کے لیے استعمال ہوتی ہیں۔ یہ ان کاموں کے لیے استعمال ہوتی ہیں جن کے لیے براہ راست اور فوری جواب کی ضرورت ہوتی ہے۔

- **Analogy:** A phone call or asking a question.
- A **Service Client** node "calls" a service by sending a *request* and then waits (blocks) until it receives a *response*.
- A **Service Server** node provides the service. It receives the request, performs an operation, and sends back a response.
- **Use Case:** A node calling a `/calculate_path` service to get a path from a motion planning node. The client needs the path before it can proceed.

- **تشبیہ:** ایک فون کال یا سوال पूछنا۔
- ایک **سروس کلائنٹ (Service Client)** نوڈ *درخواست (request)* بھیج کر ایک سروس کو "کال" کرتا ہے اور پھر *جواب (response)* ملنے تک انتظار (بلاک) کرتا ہے۔
- ایک **سروس سرور (Service Server)** نوڈ سروس فراہم کرتا ہے۔ یہ درخواست وصول کرتا ہے, ایک آپریشن انجام دیتا ہے, اور جواب واپس بھیجتا ہے۔
- **استعمال کا کیس:** ایک نوڈ جو موشن پلاننگ نوڈ سے راستہ حاصل کرنے کے لیے `/calculate_path` سروس کو کال کرتا ہے۔ کلائنٹ کو آگے بڑھنے سے پہلے راستے کی ضرورت ہوتی ہے۔

##### c) Actions (ایکشنز)

**Actions** are used for long-running, asynchronous tasks that provide continuous feedback and are preemptible (cancellable).

**ایکشنز (Actions)** طویل عرصے تک چلنے والے، غیر ہم وقت ساز کاموں کے لیے استعمال ہوتے ہیں جو مسلسل فیڈ بیک فراہم کرتے ہیں اور قابل تنسیخ (cancellable) ہوتے ہیں۔

- **Analogy:** Ordering food online.
- You (the **Action Client**) send a *goal* (your order) to the restaurant (the **Action Server**).
- The server provides periodic *feedback* ("Your order is being prepared," "Your order is out for delivery").
- You can *cancel* the order if you change your mind.
- Finally, you receive a *result* (your food arrives, or the order was canceled).
- **Use Case:** Commanding a robot to navigate to a location. The navigation node (Action Server) can provide feedback like "distance remaining" and the client can cancel the goal at any time.

- **تشبیہ:** آن لائن کھانا آرڈر کرنا۔
- آپ (**ایکشن کلائنٹ - Action Client**) ریسٹورنٹ (**ایکشن سرور - Action Server**) کو ایک *مقصد (goal)* (آپ کا آرڈر) بھیجتے ہیں۔
- سرور وقتاً فوقتاً *فیڈ بیک (feedback)* فراہم کرتا ہے ("آپ کا آرڈر تیار ہو رہا ہے،" "آپ کا آرڈر ڈیلیوری کے لیے نکل گیا ہے")۔
- اگر آپ اپنا ارادہ بدل لیں تو آپ آرڈر *منسوخ (cancel)* کر سکتے ہیں۔
- آخر میں، آپ کو ایک *نتیجہ (result)* ملتا ہے (آپ کا کھانا پہنچ جاتا ہے، یا آرڈر منسوخ ہو جاتا ہے)۔
- **استعمال کا کیس:** روبوٹ کو کسی مقام پر نیویگیٹ کرنے کا حکم دینا۔ نیویگیشن نوڈ (ایکشن سرور) "باقی فاصلہ" جیسا فیڈ بیک فراہم کر سکتا ہے اور کلائنٹ کسی بھی وقت مقصد کو منسوخ کر سکتا ہے۔

---
#### 3. Messages (`.msg`, `.srv`, `.action` files) (پیغامات)

**Messages** are the data structures that define the type and format of information exchanged between nodes. They are the "language" that nodes use to communicate.

**پیغامات (Messages)** وہ ڈیٹا ڈھانچے ہیں جو نوڈز کے درمیان تبادلہ ہونے والی معلومات کی قسم اور فارمیٹ کی وضاحت کرتے ہیں۔ یہ وہ "زبان" ہے جسے نوڈز بات چیت کے لیے استعمال کرتے ہیں۔

- Each Topic, Service, and Action is strongly typed with a specific message definition.
- These definitions are stored in `.msg`, `.srv`, and `.action` files, respectively.
- For example, a `geometry_msgs/msg/Twist` message is used for sending velocity commands. It has a well-defined structure containing fields for `linear` (x, y, z) and `angular` (x, y, z) velocity.
- This strong typing ensures that nodes are communicating correctly and prevents data-related errors.

- ہر ٹاپک، سروس، اور ایکشن ایک مخصوص پیغام کی تعریف کے ساتھ مضبوطی سے ٹائپ کیا جاتا ہے۔
- یہ تعریفیں بالترتیب `.msg`، `.srv`، اور `.action` فائلوں میں محفوظ کی جاتی ہیں۔
- مثال کے طور پر، ویلوسیٹی کمانڈ بھیجنے کے لیے `geometry_msgs/msg/Twist` پیغام استعمال ہوتا ہے۔ اس کا ایک اچھی طرح سے طے شدہ ڈھانچہ ہے جس میں `linear` (x, y, z) اور `angular` (x, y, z) ویلوسیٹی کے لیے فیلڈز شامل ہیں۔
- یہ مضبوط ٹائپنگ اس بات کو یقینی بناتی ہے کہ نوڈز صحیح طریقے سے بات چیت کر رہے ہیں اور ڈیٹا سے متعلق غلطیوں کو روکتی ہے۔

---
#### 4. Parameters (پیرامیٹرز)

**Parameters** are configurable settings for a node that can be changed at runtime without needing to restart the node. This allows for dynamic tuning and adjustment of a robot's behavior.

**پیرامیٹرز (Parameters)** ایک نوڈ کے لیے قابل ترتیب سیٹنگز ہیں جنہیں نوڈ کو دوبارہ شروع کیے بغیر رن ٹائم پر تبدیل کیا جا سکتا ہے۔ یہ روبوٹ کے رویے کی متحرک ٹیوننگ اور ایڈجسٹمنٹ کی اجازت دیتا ہے۔

- **Analogy:** The settings menu in a mobile app.
- **Use Case:** A navigation node might have a `max_speed` parameter. You could change this parameter on the fly to make the robot move faster or slower depending on the environment, without stopping and restarting the navigation software.

- **تشبیہ:** ایک موبائل ایپ میں سیٹنگز مینو۔
- **استعمال کا کیس:** ایک نیویگیشن نوڈ میں `max_speed` پیرامیٹر ہو سکتا ہے۔ آپ اس پیرامیٹر کو ماحول کے لحاظ سے روبوٹ کو تیز یا سست کرنے کے لیے فوری طور پر تبدیل کر سکتے ہیں، بغیر نیویگیشن سافٹ ویئر کو روکے اور دوبارہ شروع کیے۔

### ROS 2 Architecture

The architecture of ROS 2 is designed as a series of layers, which makes it highly modular and flexible. This layered approach allows different parts of the system to be developed and replaced independently.

ROS 2 کا فن تعمیر تہوں کی ایک سیریز کے طور پر ڈیزائن کیا گیا ہے، جو اسے انتہائی ماڈیولر اور لچکدار بناتا ہے۔ یہ تہہ دار نقطہ نظر نظام کے مختلف حصوں کو آزادانہ طور پر تیار کرنے اور تبدیل کرنے کی اجازت دیتا ہے۔

Here are the main layers of the ROS 2 stack, from the bottom up:

یہاں ROS 2 اسٹیک کی اہم تہیں ہیں، نیچے سے اوپر تک:

**1. Hardware Layer (ہارڈویئر کی تہہ)**
This is the physical hardware of the robot, including sensors (cameras, LiDAR), actuators (motors), and computer hardware (CPU, GPU). This layer is what ROS 2 ultimately controls and interacts with.

یہ روبوٹ کا طبعی ہارڈویئر ہے، جس میں سینسرز (کیمرے، LiDAR)، ایکچویٹرز (موٹرز)، اور کمپیوٹر ہارڈویئر (CPU, GPU) شامل ہیں۔ یہ وہ تہہ ہے جسے ROS 2 بالآخر کنٹرول کرتا ہے اور اس کے ساتھ تعامل کرتا ہے۔

**2. Driver Layer (ڈرائیور کی تہہ)**
This layer consists of software drivers that allow the operating system (like Linux) to communicate with the robot's hardware. These drivers are not part of ROS 2 itself but are essential for it to function.

یہ تہہ سافٹ ویئر ڈرائیورز پر مشتمل ہے جو آپریٹنگ سسٹم (جیسے لینکس) کو روبوٹ کے ہارڈویئر کے ساتھ بات چیت کرنے کی اجازت دیتی ہے۔ یہ ڈرائیورز خود ROS 2 کا حصہ نہیں ہیں لیکن اس کے کام کرنے کے لیے ضروری ہیں۔

**3. ROS Middleware Interface (RMW)**
This is a critical and powerful feature of ROS 2. The RMW is an **abstraction layer** that separates the ROS 2 application layers from the underlying communication middleware. By default, ROS 2 uses **Data Distribution Service (DDS)**, an industry standard for real-time, publish-subscribe messaging. However, because of the RMW, ROS 2 is not tied to a single DDS vendor. Developers can switch between different DDS implementations (e.g., eProsima Fast DDS, RTI Connext, Eclipse Cyclone DDS) or even use entirely different middleware (like MQTT or ZeroMQ) by creating a new RMW implementation. This provides immense flexibility and allows ROS 2 to be adapted for different network environments and performance requirements.

یہ ROS 2 کی ایک اہم اور طاقتور خصوصیت ہے۔ RMW ایک **ایبسٹریکشن لیئر (abstraction layer)** ہے جو ROS 2 ایپلی کیشن کی تہوں کو بنیادی مواصلاتی مڈل ویئر سے الگ کرتی ہے۔ پہلے سے طے شدہ طور پر، ROS 2 **ڈیٹا ڈسٹری بیوشن سروس (DDS)** کا استعمال کرتا ہے، جو ریئل ٹائم، پبلش-سبسکرائب پیغام رسانی کے لیے ایک صنعتی معیار ہے۔ تاہم، RMW کی وجہ سے، ROS 2 کسی ایک DDS وینڈر سے منسلک نہیں ہے۔ ڈیولپرز مختلف DDS نفاذات (مثلاً، eProsima Fast DDS, RTI Connext, Eclipse Cyclone DDS) کے درمیان سوئچ کر سکتے ہیں یا نیا RMW نفاذ بنا کر مکمل طور پر مختلف مڈل ویئر (جیسے MQTT یا ZeroMQ) بھی استعمال کر سکتے ہیں۔ یہ بے پناہ لچک فراہم کرتا ہے اور ROS 2 کو مختلف نیٹ ورک ماحول اور کارکردگی کی ضروریات کے لیے ڈھالنے کی اجازت دیتا ہے۔

**4. ROS Client Library (RCL)**
The RCL is the core client library that provides the common functionality for building ROS 2 nodes. It is a C-based API that implements the logic for nodes, topics, services, parameters, etc., by interacting with the RMW layer. The RCL makes it easier to build higher-level client libraries in different programming languages.

RCL بنیادی کلائنٹ لائبریری ہے جو ROS 2 نوڈز بنانے کے لیے عام فعالیت فراہم کرتی ہے۔ یہ ایک C پر مبنی API ہے جو RMW تہہ کے ساتھ تعامل کرکے نوڈز، ٹاپکس، سروسز، پیرامیٹرز وغیرہ کے لیے منطق کو نافذ کرتی ہے۔ RCL مختلف پروگرامنگ زبانوں میں اعلیٰ سطحی کلائنٹ لائبریریاں بنانا آسان بناتی ہے۔

**5. Language-Specific Client Libraries (`rclcpp`, `rclpy`)**
These are the most commonly used APIs for ROS 2 development.
- **`rclcpp`:** The C++ client library. It provides an object-oriented, idiomatic C++ interface for creating nodes and using ROS 2 concepts.
- **`rclpy`:** The Python client library. It provides a similar, Pythonic interface for ROS 2 development.

These libraries are built on top of the RCL and provide a more convenient and language-natural way to write ROS 2 applications.

یہ ROS 2 ڈیولپمنٹ کے لیے سب سے زیادہ استعمال ہونے والی APIs ہیں۔
- **`rclcpp`:** C++ کلائنٹ لائبریری۔ یہ نوڈز بنانے اور ROS 2 تصورات کو استعمال کرنے کے لیے ایک آبجیکٹ اورینٹڈ، idiomatic C++ انٹرفیس فراہم کرتی ہے۔
- **`rclpy`:** پائتھن کلائنٹ لائبریری۔ یہ ROS 2 ڈیولپمنٹ کے لیے ایک ملتی جلتی، Pythonic انٹرفیس فراہم کرتی ہے۔

یہ لائبریریاں RCL کے اوپر بنائی گئی ہیں اور ROS 2 ایپلی کیشنز لکھنے کا ایک زیادہ آسان اور زبان کے لحاظ سے قدرتی طریقہ فراہم کرتی ہیں۔

**6. Application Layer (ایپلی کیشن کی تہہ)**
This is the top layer, where you, the developer, write your ROS 2 nodes. Your nodes use the client libraries (`rclcpp` or `rclpy`) to implement the specific logic and functionality of your robot. This is where you define how your robot perceives the world, makes decisions, and acts upon its environment.

یہ سب سے اوپر کی تہہ ہے، جہاں آپ، ڈیولپر، اپنے ROS 2 نوڈز لکھتے ہیں۔ آپ کے نوڈز کلائنٹ لائبریریوں (`rclcpp` یا `rclpy`) کا استعمال کرکے آپ کے روبوٹ کی مخصوص منطق اور فعالیت کو نافذ کرتے ہیں۔ یہ وہ جگہ ہے جہاں آپ بیان کرتے ہیں کہ آپ کا روبوٹ دنیا کو کیسے سمجھتا ہے، فیصلے کرتا ہے، اور اپنے ماحول پر عمل کرتا ہے۔

### ROS 2 vs. ROS 1: A Detailed Comparison

ROS 2 was redesigned from the ground up to overcome the limitations of ROS 1 and meet the demands of modern, production-grade robotics. While they share core concepts, the underlying architecture and capabilities are significantly different.

ROS 2 کو ROS 1 کی حدود پر قابو پانے اور جدید، پیداواری درجے کی روبوٹکس کے تقاضوں کو پورا کرنے کے لیے شروع سے دوبارہ ڈیزائن کیا گیا تھا۔ اگرچہ وہ بنیادی تصورات کا اشتراک کرتے ہیں، لیکن بنیادی فن تعمیر اور صلاحیتیں نمایاں طور پر مختلف ہیں۔

| Feature | ROS 1 | ROS 2 |
| :--- | :--- | :--- |
| **Communication** | Custom TCP-based protocol (TCPROS) | Uses **DDS (Data Distribution Service)**, a standard, configurable middleware. |
| **مواصلات** | کسٹم TCP پر مبنی پروٹوکول (TCPROS) | **DDS (ڈیٹا ڈسٹری بیوشن سروس)** کا استعمال کرتا ہے، جو ایک معیاری، قابل ترتیب مڈل ویئر ہے۔ |
| **Centralization** | **Centralized:** Relies on a single `roscore` (ROS Master) for node discovery. This is a single point of failure. | **Decentralized:** No master node. Nodes discover each other automatically, making the system more robust and scalable. |
| **مرکزیت** | **مرکزی:** نوڈ کی دریافت کے لیے ایک واحد `roscore` (ROS ماسٹر) پر انحصار کرتا ہے۔ یہ ناکامی کا واحد نقطہ ہے۔ | **وکندریقرت:** کوئی ماسٹر نوڈ نہیں۔ نوڈز ایک دوسرے کو خود بخود دریافت کرتے ہیں، جس سے نظام زیادہ مضبوط اور قابل توسیع ہوتا ہے۔ |
| **Real-time Support** | No built-in real-time support. Difficult to use with RTOS. | **Designed for Real-time:** Can be used with Real-Time Operating Systems (RTOS) for deterministic behavior. |
| **ریئل ٹائم سپورٹ** | کوئی بلٹ ان ریئل ٹائم سپورٹ نہیں۔ RTOS کے ساتھ استعمال کرنا مشکل ہے۔ | **ریئل ٹائم کے لیے ڈیزائن کیا گیا:** فیصلہ کن رویے کے لیے ریئل ٹائم آپریٹنگ سسٹمز (RTOS) کے ساتھ استعمال کیا جا سکتا ہے۔ |
| **Security** | No built-in security features. Communication is unencrypted. | **Secure:** Provides robust security with authentication, encryption, and access control lists (ACLs). |
| **سیکیورٹی** | کوئی بلٹ ان سیکیورٹی خصوصیات نہیں۔ مواصلات غیر خفیہ شدہ ہے۔ | **محفوظ:** تصدیق، خفیہ کاری، اور رسائی کنٹرول لسٹس (ACLs) کے ساتھ مضبوط سیکیورٹی فراہم کرتا ہے۔ |
| **Platform Support** | Primarily **Linux**. Experimental support for Windows and macOS. | **Cross-platform:** Officially supports **Linux, Windows, and macOS**. |
| **پلیٹ فارم سپورٹ** | بنیادی طور پر **لینکس**۔ ونڈوز اور میک او ایس کے لیے تجرباتی سپورٹ۔ | **کراس پلیٹ فارم:** سرکاری طور پر **لینکس، ونڈوز، اور میک او ایس** کو سپورٹ کرتا ہے۔ |
| **Python Version**| Python 2 | Python 3 |
| **پائتھن ورژن**| پائتھن 2 | پائتھن 3 |
| **Network Reliability**| Assumes a stable, wired network. Struggles with unreliable Wi-Fi. | **Handles Unreliable Networks:** DDS provides Quality of Service (QoS) policies to manage data delivery over lossy networks. |
| **نیٹ ورک کی وشوسنییتا**| ایک مستحکم، وائرڈ نیٹ ورک فرض کرتا ہے۔ ناقابل اعتماد وائی فائی کے ساتھ جدوجہد کرتا ہے۔ | **ناقابل اعتماد نیٹ ورکس کو ہینڈل کرتا ہے:** DDS نقصان دہ نیٹ ورکس پر ڈیٹا کی ترسیل کو منظم کرنے کے لیے کوالٹی آف سروس (QoS) پالیسیاں فراہم کرتا ہے۔ |
| **Component Lifecycle**| No standardized way to manage node startup, shutdown, and state transitions. | **Managed Lifecycles:** Nodes can have managed lifecycles (e.g., configuring, activating, deactivating), which is crucial for building robust, stateful systems. |
| **اجزاء کی لائف سائیکل**| نوڈ اسٹارٹ اپ، شٹ ڈاؤن، اور اسٹیٹ ٹرانزیشن کو منظم کرنے کا کوئی معیاری طریقہ نہیں۔ | **منظم لائف سائیکلز:** نوڈز کی منظم لائف سائیکلز ہو سکتی ہیں (مثلاً، کنفیگر کرنا، چالو کرنا، غیر فعال کرنا)، جو مضبوط، اسٹیٹ فل سسٹمز بنانے کے لیے اہم ہے۔ |
| **Build System** | `catkin` | `colcon` (can also build catkin packages) |
| **بلڈ سسٹم** | `catkin` | `colcon` (کیٹکن پیکجز بھی بنا سکتا ہے) |

## Chapter 2: Setting up a ROS 2 Workspace

Before we can start developing applications with ROS 2, we need to set up our development environment. This involves installing ROS 2 itself and then creating a workspace where we will develop our own robot software packages.

ROS 2 کے ساتھ ایپلی کیشنز تیار کرنا شروع کرنے سے پہلے، ہمیں اپنے ڈیولپمنٹ ماحول کو ترتیب دینے کی ضرورت ہے۔ اس میں خود ROS 2 کو انسٹال کرنا اور پھر ایک ورک اسپیس بنانا شامل ہے جہاں ہم اپنے روبوٹ سافٹ ویئر پیکجز تیار کریں گے۔

### Installation of ROS 2

This guide covers the installation of **ROS 2 Humble Hawksbill on Ubuntu 22.04 (Jammy Jellyfish)**. Humble Hawksbill is a Long Term Support (LTS) release, meaning it will receive updates and support for an extended period, making it suitable for stable development.

یہ گائیڈ **Ubuntu 22.04 (Jammy Jellyfish) پر ROS 2 Humble Hawksbill** کی تنصیب کا احاطہ کرتا ہے۔ Humble Hawksbill ایک لانگ ٹرم سپورٹ (LTS) ریلیز ہے، یعنی اسے طویل عرصے تک اپ ڈیٹس اور سپورٹ ملے گی، جو اسے مستحکم ترقی کے لیے موزوں بناتی ہے۔

#### 1. Set Locale (لوکیل سیٹ کریں)

It's crucial to ensure your system supports UTF-8, as ROS 2 relies on this for proper character encoding.

یہ یقینی بنانا بہت ضروری ہے کہ آپ کا سسٹم UTF-8 کو سپورٹ کرتا ہے، کیونکہ ROS 2 مناسب کریکٹر انکوڈنگ کے لیے اس پر انحصار کرتا ہے۔

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

- `sudo apt update && sudo apt install locales`: Updates your package lists and installs the `locales` package if it's not already present.
- `sudo locale-gen en_US en_US.UTF-8`: Generates the en_US.UTF-8 locale, ensuring your system can handle English characters with UTF-8 encoding.
- `sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8`: Sets the system-wide locale to en_US.UTF-8. `LC_ALL` overrides all other locale settings, and `LANG` sets the default locale.
- `export LANG=en_US.UTF-8`: Sets the `LANG` environment variable for your current terminal session.

- `sudo apt update && sudo apt install locales`: آپ کی پیکیج کی فہرستوں کو اپ ڈیٹ کرتا ہے اور اگر پہلے سے موجود نہ ہو تو `locales` پیکیج انسٹال کرتا ہے۔
- `sudo locale-gen en_US en_US.UTF-8`: en_US.UTF-8 لوکیل تیار کرتا ہے، اس بات کو یقینی بناتا ہے کہ آپ کا سسٹم UTF-8 انکوڈنگ کے ساتھ انگریزی حروف کو ہینڈل کر سکے۔
- `sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8`: سسٹم وسیع لوکیل کو en_US.UTF-8 پر سیٹ کرتا ہے۔ `LC_ALL` دیگر تمام لوکیل سیٹنگز کو اوور رائیڈ کرتا ہے، اور `LANG` پہلے سے طے شدہ لوکیل سیٹ کرتا ہے۔
- `export LANG=en_US.UTF-8`: آپ کے موجودہ ٹرمینل سیشن کے لیے `LANG` ماحولیاتی متغیر کو سیٹ کرتا ہے۔

#### 2. Add ROS 2 Repository (ROS 2 ریپوزٹری شامل کریں)

To install ROS 2 packages, you need to add the official ROS 2 package repository to your system's software sources. This allows your system's package manager (`apt`) to find and install ROS 2.

ROS 2 پیکجز انسٹال کرنے کے لیے، آپ کو اپنے سسٹم کے سافٹ ویئر ذرائع میں آفیشل ROS 2 پیکیج ریپوزٹری شامل کرنے کی ضرورت ہے۔ یہ آپ کے سسٹم کے پیکیج مینیجر (`apt`) کو ROS 2 کو تلاش کرنے اور انسٹال کرنے کی اجازت دیتا ہے۔

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe -y
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

- `sudo apt install software-properties-common -y`: Installs tools for managing software repositories.
- `sudo add-apt-repository universe -y`: Adds the 'universe' repository, which contains community-maintained software.
- `sudo apt update && sudo apt install curl -y`: Updates package lists and installs `curl`, a command-line tool for transferring data with URLs.
- `sudo curl -sSL ... ros.key -o ... keyring.gpg`: Downloads the ROS GPG key and saves it to the keyrings directory. This key is used to verify the authenticity of ROS packages.
- `echo "deb [arch=...] signed-by=... ros2.list > /dev/null`: Adds the ROS 2 repository to your system's software sources. This line dynamically determines your system's architecture and Ubuntu codename to ensure the correct repository is added.

- `sudo apt install software-properties-common -y`: سافٹ ویئر ریپوزٹریز کو منظم کرنے کے لیے ٹولز انسٹال کرتا ہے۔
- `sudo add-apt-repository universe -y`: 'universe' ریپوزٹری شامل کرتا ہے، جس میں کمیونٹی کے زیر انتظام سافٹ ویئر شامل ہیں۔
- `sudo apt update && sudo apt install curl -y`: پیکیج کی فہرستوں کو اپ ڈیٹ کرتا ہے اور `curl` انسٹال کرتا ہے، جو URLs کے ساتھ ڈیٹا کی منتقلی کے لیے ایک کمانڈ لائن ٹول ہے۔
- `sudo curl -sSL ... ros.key -o ... keyring.gpg`: ROS GPG کلید ڈاؤن لوڈ کرتا ہے اور اسے کیرنگز ڈائرکٹری میں محفوظ کرتا ہے۔ یہ کلید ROS پیکجز کی صداقت کی تصدیق کے لیے استعمال ہوتی ہے۔
- `echo "deb [arch=...] signed-by=... ros2.list > /dev/null`: ROS 2 ریپوزٹری کو آپ کے سسٹم کے سافٹ ویئر ذرائع میں شامل کرتا ہے۔ یہ لائن آپ کے سسٹم کے فن تعمیر اور اوبنٹو کوڈ نام کا متحرک طور پر تعین کرتی ہے تاکہ صحیح ریپوزٹری شامل کی جائے۔

#### 3. Install ROS 2 Packages (ROS 2 پیکیجز انسٹال کریں)

With the repository added, you can now install ROS 2. The `ros-humble-desktop` package includes ROS 2, `rqt_plot`, `rviz`, `rosbag`, and `demos`. This is the recommended installation for desktop development.

ریپوزٹری شامل کرنے کے بعد، اب آپ ROS 2 انسٹال کر سکتے ہیں۔ `ros-humble-desktop` پیکیج میں ROS 2، `rqt_plot`، `rviz`، `rosbag`، اور `demos` شامل ہیں۔ یہ ڈیسک ٹاپ ڈیولپمنٹ کے لیے تجویز کردہ تنصیب ہے۔

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-humble-desktop -y
```

- `sudo apt update`: Refreshes your package list after adding the new repository.
- `sudo apt upgrade -y`: Upgrades all installed packages to their latest versions.
- `sudo apt install ros-humble-desktop -y`: Installs the full ROS 2 Humble desktop environment.

- `sudo apt update`: نئی ریپوزٹری شامل کرنے کے بعد آپ کی پیکیج کی فہرست کو ریفریش کرتا ہے۔
- `sudo apt upgrade -y`: تمام انسٹال کردہ پیکجز کو ان کے تازہ ترین ورژنز میں اپ گریڈ کرتا ہے۔
- `sudo apt install ros-humble-desktop -y`: مکمل ROS 2 Humble ڈیسک ٹاپ ماحول انسٹال کرتا ہے۔

#### 4. Source the Setup File (سیٹ اپ فائل کو سورس کریں)

After installation, you need to "source" the ROS 2 setup script in every new terminal you open. This script sets up the necessary environment variables (like `PATH` and `AMENT_PREFIX_PATH`) that allow your system to find ROS 2 commands and packages.

تنصیب کے بعد، آپ کو ہر نئے ٹرمینل میں ROS 2 سیٹ اپ اسکرپٹ کو "سورس" کرنے کی ضرورت ہے۔ یہ اسکرپٹ ضروری ماحولیاتی متغیرات (جیسے `PATH` اور `AMENT_PREFIX_PATH`) سیٹ کرتا ہے جو آپ کے سسٹم کو ROS 2 کمانڈز اور پیکجز کو تلاش کرنے کی اجازت دیتے ہیں۔

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

- `echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc`: Adds the sourcing command to your `~/.bashrc` file. This makes ROS 2 automatically sourced every time you open a new terminal.
- `source ~/.bashrc`: Executes the `~/.bashrc` script in your current terminal, applying the changes immediately.

- `echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc`: آپ کی `~/.bashrc` فائل میں سورسنگ کمانڈ شامل کرتا ہے۔ یہ ROS 2 کو ہر بار نیا ٹرمینل کھولنے پر خود بخود سورس کرتا ہے۔
- `source ~/.bashrc`: آپ کے موجودہ ٹرمینل میں `~/.bashrc` اسکرپٹ کو چلاتا ہے، تبدیلیوں کو فوری طور پر لاگو کرتا ہے۔

#### 5. Verify Installation (تنصیب کی تصدیق کریں)

To verify that ROS 2 is installed correctly, you can run the `talker-listener` example, which is included in the `demo_nodes_cpp` and `demo_nodes_py` packages.

یہ تصدیق کرنے کے لیے کہ ROS 2 صحیح طریقے سے انسٹال ہوا ہے، آپ `talker-listener` مثال چلا سکتے ہیں، جو `demo_nodes_cpp` اور `demo_nodes_py` پیکجز میں شامل ہے۔

- **Terminal 1:** Run the C++ talker node, which publishes "Hello World" messages.
  ```bash
  ros2 run demo_nodes_cpp talker
  ```
  - **ٹرمینل 1:** C++ ٹاکر نوڈ چلائیں، جو "ہیلو ورلڈ" پیغامات پبلش کرتا ہے۔
  ```bash
  ros2 run demo_nodes_cpp talker
  ```

- **Terminal 2:** Run the Python listener node, which subscribes to the messages published by the talker.
  ```bash
  ros2 run demo_nodes_py listener
  ```
  - **ٹرمینل 2:** پائتھن لسنر نوڈ چلائیں، جو ٹاکر کے ذریعہ پبلش کردہ پیغامات کو سبسکرائب کرتا ہے۔
  ```bash
  ros2 run demo_nodes_py listener
  ```
  If you see messages being exchanged between the two terminals, your ROS 2 installation is successful!

  اگر آپ کو دونوں ٹرمینلز کے درمیان پیغامات کا تبادلہ ہوتا ہوا نظر آتا ہے، تو آپ کی ROS 2 تنصیب کامیاب ہے!

### Creating a ROS 2 Package

A **ROS 2 Package** is the primary unit of organization in ROS 2. It's a directory that contains your source code (C++, Python), configuration files, launch files, message definitions, and other resources. Creating a package is the first step when you want to write your own ROS 2 applications.

**ROS 2 پیکیج (ROS 2 Package)** ROS 2 میں تنظیم کی بنیادی اکائی ہے۔ یہ ایک ڈائرکٹری ہے جس میں آپ کا سورس کوڈ (C++، پائتھن)، کنفیگریشن فائلز، لانچ فائلز، میسج کی تعریفیں، اور دیگر وسائل شامل ہوتے ہیں۔ ایک پیکیج بنانا پہلا قدم ہے جب آپ اپنی ROS 2 ایپلی کیشنز لکھنا چاہتے ہیں۔

The `ros2 pkg create` command is used to generate the basic structure of a new package. It creates the necessary directories and initial files, setting up your package for development.

`ros2 pkg create` کمانڈ ایک نئے پیکیج کی بنیادی ساخت بنانے کے لیے استعمال ہوتی ہے۔ یہ ضروری ڈائریکٹریاں اور ابتدائی فائلیں بناتی ہے، آپ کے پیکیج کو ڈیولپمنٹ کے لیے ترتیب دیتی ہے۔

#### General Command Syntax (عمومی کمانڈ کا ڈھانچہ)

You typically run this command from the `src` directory of your ROS 2 workspace:

آپ عام طور پر یہ کمانڈ اپنے ROS 2 ورک اسپیس کی `src` ڈائرکٹری سے چلاتے ہیں:

```bash
ros2 pkg create <package_name> --build-type <build_type> --dependencies <dependencies_separated_by_space>
```

-   `<package_name>`: The desired name for your package. Use lowercase and underscores (e.g., `my_robot_controller`).
-   `--build-type <build_type>`: Specifies the build system. The two most common types are `ament_python` for Python packages and `ament_cmake` for C++ packages.
-   `--dependencies <dependencies>`: A space-separated list of other ROS 2 packages that your new package will rely on. These are added to your `package.xml` automatically.

-   `<package_name>`: آپ کے پیکیج کا مطلوبہ نام۔ چھوٹے حروف اور انڈرسکور استعمال کریں (مثلاً، `my_robot_controller`)۔
-   `--build-type <build_type>`: بلڈ سسٹم کی وضاحت کرتا ہے۔ دو سب سے عام اقسام پائتھن پیکجز کے لیے `ament_python` اور C++ پیکجز کے لیے `ament_cmake` ہیں۔
-   `--dependencies <dependencies>`: دوسرے ROS 2 پیکجز کی جگہ سے الگ کی گئی فہرست جن پر آپ کا نیا پیکیج انحصار کرے گا۔ یہ خود بخود آپ کی `package.xml` میں شامل ہو جاتے ہیں۔

#### Creating a Python Package (`ament_python`)

For packages that contain primarily Python code, you will use the `ament_python` build type.

ایسے پیکجز کے لیے جن میں بنیادی طور پر پائتھن کوڈ ہوتا ہے، آپ `ament_python` بلڈ ٹائپ استعمال کریں گے۔

**Example:**
Navigate to your workspace `src` directory:

مثال:
اپنی ورک اسپیس کی `src` ڈائرکٹری پر جائیں:

```bash
cd ~/ros2_ws/src
ros2 pkg create my_python_pkg --build-type ament_python --dependencies rclpy std_msgs
```

**Explanation:**
-   `my_python_pkg`: The name of your new Python package.
-   `--build-type ament_python`: Specifies that this is a Python package built with `ament_python`. This generates a `setup.py` file for Python package management.
-   `--dependencies rclpy std_msgs`: Declares that this package will use the `rclpy` client library (for writing ROS 2 Python nodes) and `std_msgs` (for standard message types like `String` or `Int32`). These dependencies will be added to the `package.xml` file.

**وضاحت:**
-   `my_python_pkg`: آپ کے نئے پائتھن پیکیج کا نام۔
-   `--build-type ament_python`: وضاحت کرتا ہے کہ یہ `ament_python` کے ساتھ بنایا گیا ایک پائتھن پیکیج ہے۔ یہ پائتھن پیکیج مینجمنٹ کے لیے ایک `setup.py` فائل تیار کرتا ہے۔
-   `--dependencies rclpy std_msgs`: اعلان کرتا ہے کہ یہ پیکیج `rclpy` کلائنٹ لائبریری (ROS 2 پائتھن نوڈز لکھنے کے لیے) اور `std_msgs` (معیاری میسج کی اقسام جیسے `String` یا `Int32` کے لیے) استعمال کرے گا۔ یہ ڈیپینڈنسیز `package.xml` فائل میں شامل کی جائیں گی۔

After creation, your package structure will look something like this:

تخلیق کے بعد، آپ کے پیکیج کی ساخت کچھ یوں نظر آئے گی:

```
my_python_pkg/
├── package.xml
├── setup.py
├── setup.cfg
├── resource/my_python_pkg
└── my_python_pkg/
    └── __init__.py
```

-   **`setup.py`**: This file is used by Python's `setuptools` to build and install your Python code. You'll add entry points for your Python executables here.
-   **`setup.cfg`**: Contains configurations for `setuptools`.
-   **`my_python_pkg/__init__.py`**: Makes `my_python_pkg` a Python package, allowing you to import modules from it.

-   **`setup.py`**: یہ فائل پائتھن کے `setuptools` کے ذریعہ آپ کے پائتھن کوڈ کو بنانے اور انسٹال کرنے کے لیے استعمال ہوتی ہے۔ آپ یہاں اپنے پائتھن ایکزیکیوٹیبلز کے لیے انٹری پوائنٹس شامل کریں گے۔
-   **`setup.cfg`**: `setuptools` کے لیے کنفیگریشنز پر مشتمل ہے۔
-   **`my_python_pkg/__init__.py`**: `my_python_pkg` کو ایک پائتھن پیکیج بناتا ہے، جو آپ کو اس سے ماڈیولز درآمد کرنے کی اجازت دیتا ہے۔

#### Creating a C++ Package (`ament_cmake`)

For packages that contain C++ code, you will typically use the `ament_cmake` build type. This is also the default build type if you omit the `--build-type` flag.

ایسے پیکجز کے لیے جن میں C++ کوڈ ہوتا ہے، آپ عام طور پر `ament_cmake` بلڈ ٹائپ استعمال کریں گے۔ اگر آپ `--build-type` فلیگ کو چھوڑ دیتے ہیں تو یہ پہلے سے طے شدہ بلڈ ٹائپ بھی ہے۔

**Example:**
Navigate to your workspace `src` directory:

مثال:
اپنی ورک اسپیس کی `src` ڈائرکٹری پر جائیں:

```bash
cd ~/ros2_ws/src
ros2 pkg create my_cpp_pkg --build-type ament_cmake --dependencies rclcpp std_msgs
```

**Explanation:**
-   `my_cpp_pkg`: The name of your new C++ package.
-   `--build-type ament_cmake`: Specifies that this is a C++ package built with CMake. This generates a `CMakeLists.txt` file.
-   `--dependencies rclcpp std_msgs`: Declares `rclcpp` (for writing ROS 2 C++ nodes) and `std_msgs` as dependencies.

**وضاحت:**
-   `my_cpp_pkg`: آپ کے نئے C++ پیکیج کا نام۔
-   `--build-type ament_cmake`: وضاحت کرتا ہے کہ یہ CMake کے ساتھ بنایا گیا ایک C++ پیکیج ہے۔ یہ ایک `CMakeLists.txt` فائل تیار کرتا ہے۔
-   `--dependencies rclcpp std_msgs`: `rclcpp` (ROS 2 C++ نوڈز لکھنے کے لیے) اور `std_msgs` کو ڈیپینڈنسیز کے طور پر اعلان کرتا ہے۔

After creation, your package structure will look something like this:

تخلیق کے بعد، آپ کے پیکیج کی ساخت کچھ یوں نظر آئے گی:

```
my_cpp_pkg/
├── package.xml
├── CMakeLists.txt
├── include/my_cpp_pkg/
└── src/
```

-   **`CMakeLists.txt`**: This file is used by CMake to define how your C++ code is compiled, linked, and installed.
-   **`include/my_cpp_pkg/`**: This directory is for your public C++ header files.
-   **`src/`**: This directory is where you'll place your C++ source (`.cpp`) files.

-   **`CMakeLists.txt`**: یہ فائل CMake کے ذریعہ استعمال ہوتی ہے تاکہ یہ تعریف کی جا سکے کہ آپ کا C++ کوڈ کیسے کمپائل، لنک، اور انسٹال کیا جاتا ہے۔
-   **`include/my_cpp_pkg/`**: یہ ڈائرکٹری آپ کی عوامی C++ ہیڈر فائلوں کے لیے ہے۔
-   **`src/`**: یہ ڈائرکٹری وہ جگہ ہے جہاں آپ اپنی C++ سورس (`.cpp`) فائلیں رکھیں گے۔

#### Understanding the `package.xml` File (پیکیج.ایکس ایم ایل فائل کو سمجھنا)

The `package.xml` file is present in every ROS 2 package and serves as its manifest. It contains crucial metadata about your package and declares all its dependencies.

`package.xml` فائل ہر ROS 2 پیکیج میں موجود ہوتی ہے اور اس کے مینیفیسٹ کے طور پر کام کرتی ہے۔ اس میں آپ کے پیکیج کے بارے میں اہم میٹا ڈیٹا اور اس کے تمام ڈیپینڈنسیز کا اعلان ہوتا ہے۔

**Key Elements in `package.xml`:**
-   `<name>`, `<version>`, `<description>`, `<maintainer>`, `<license>`: Standard package metadata.
-   **`buildtool_depend`**: Specifies the build tool used (e.g., `ament_cmake` or `ament_python`).
-   **`depend`**: Declares a dependency that is required for building, running, and testing your package. This is the most common and versatile dependency type.
-   **`exec_depend`**: Declares a dependency only needed at runtime (e.g., for executables).
-   **`test_depend`**: Declares a dependency only needed for running tests.
-   **`export`**: Contains information about how your package exports its build type.

**`package.xml` میں کلیدی عناصر:**
-   `<name>`, `<version>`, `<description>`, `<maintainer>`, `<license>`: معیاری پیکیج میٹا ڈیٹا۔
-   **`buildtool_depend`**: استعمال شدہ بلڈ ٹول کی وضاحت کرتا ہے (مثلاً، `ament_cmake` یا `ament_python`)۔
-   **`depend`**: ایک ڈیپینڈنسی کا اعلان کرتا ہے جو آپ کے پیکیج کو بنانے، چلانے، اور ٹیسٹ کرنے کے لیے ضروری ہے۔ یہ سب سے عام اور ورسٹائل ڈیپینڈنسی کی قسم ہے۔
-   **`exec_depend`**: ایک ڈیپینڈنسی کا اعلان کرتا ہے جس کی ضرورت صرف رن ٹائم پر ہوتی ہے (مثلاً، ایکزیکیوٹیبلز کے لیے)۔
-   **`test_depend`**: ایک ڈیپینڈنسی کا اعلان کرتا ہے جس کی ضرورت صرف ٹیسٹ چلانے کے لیے ہوتی ہے۔
-   **`export`**: معلومات پر مشتمل ہوتا ہے کہ آپ کا پیکیج اپنی بلڈ ٹائپ کو کیسے ایکسپورٹ کرتا ہے۔

**Managing Dependencies:**
After you create a package and declare its dependencies in `package.xml`, it's good practice to install any missing system-level dependencies using `rosdep`. Navigate to your workspace root (`~/ros2_ws`) and run:

ڈیپینڈنسیز کا انتظام:
جب آپ ایک پیکیج بناتے ہیں اور `package.xml` میں اس کی ڈیپینڈنسیز کا اعلان کرتے ہیں، تو `rosdep` کا استعمال کرتے ہوئے کسی بھی گمشدہ سسٹم لیول ڈیپینڈنسیز کو انسٹال کرنا ایک اچھا عمل ہے۔ اپنی ورک اسپیس کی روٹ (`~/ros2_ws`) پر جائیں اور چلائیں:

```bash
rosdep install --from-paths src --ignore-src -r -y
```

This command will check all packages in your `src` directory, identify their system dependencies, and install them using your system's package manager (e.g., `apt` on Ubuntu).

یہ کمانڈ آپ کی `src` ڈائرکٹری میں تمام پیکجز کو چیک کرے گی، ان کی سسٹم ڈیپینڈنسیز کی شناخت کرے گی، اور انہیں آپ کے سسٹم کے پیکیج مینیجر (مثلاً، اوبنٹو پر `apt`) کا استعمال کرتے ہوئے انسٹال کرے گی۔

By following these steps, you can effectively create ROS 2 packages tailored for either Python or C++ development, ensuring they are properly configured and declare their necessary dependencies.

### Building and Sourcing the Workspace

After creating packages and adding your code, the next crucial steps are to **build** your workspace and then **source** it. This process compiles your code into executables and libraries, and then makes them available to the ROS 2 environment.

اپنے پیکجز بنانے اور اپنا کوڈ شامل کرنے کے بعد، اگلے اہم مراحل یہ ہیں کہ اپنی ورک اسپیس کو **بلڈ (build)** کریں اور پھر اسے **سورس (source)** کریں۔ یہ عمل آپ کے کوڈ کو ایکزیکیوٹیبلز اور لائبریریوں میں کمپائل کرتا ہے، اور پھر انہیں ROS 2 ماحول کے لیے دستیاب بناتا ہے۔

#### 1. Building the Workspace with `colcon`

`colcon` is the official command-line tool for building ROS 2 packages within a workspace. It handles the compilation of all your packages, respecting their dependencies and build types.

`colcon` ایک ورک اسپیس کے اندر ROS 2 پیکجز کو بنانے کے لیے آفیشل کمانڈ لائن ٹول ہے۔ یہ آپ کے تمام پیکجز کی کمپائلیشن کو سنبھالتا ہے، ان کی ڈیپینڈنسیز اور بلڈ کی اقسام کا احترام کرتے ہوئے.

**Steps to Build:**

1.  **Navigate to the Workspace Root:**
    Always run `colcon build` from the root of your workspace (e.g., `~/ros2_ws`), not from within the `src` directory or a specific package.

    **ورک اسپیس کی روٹ پر جائیں:**
    ہمیشہ اپنی ورک اسپیس کی روٹ سے `colcon build` چلائیں (مثلاً، `~/ros2_ws`)، نہ کہ `src` ڈائرکٹری یا کسی مخصوص پیکیج کے اندر سے۔

2.  **Run `colcon build`:**
    ```bash
    cd ~/ros2_ws
    colcon build
    ```
    -   `colcon` will automatically find all packages in your `src` directory.
    -   It determines the correct build order based on package dependencies.
    -   For each package, it invokes the appropriate build system (`ament_cmake` for C++, `ament_python` for Python).
    -   Compiled executables, libraries, and other artifacts are then placed in the `install` directory of your workspace.

    **`colcon build` چلائیں:**
    ```bash
    cd ~/ros2_ws
    colcon build
    ```
    -   `colcon` خود بخود آپ کی `src` ڈائرکٹری میں تمام پیکجز تلاش کرے گا۔
    -   یہ پیکیج کی ڈیپینڈنسیز کی بنیاد پر صحیح بلڈ ترتیب کا تعین کرتا ہے۔
    -   ہر پیکیج کے لیے، یہ مناسب بلڈ سسٹم کو چلاتا ہے (C++ کے لیے `ament_cmake`، پائتھن کے لیے `ament_python`)۔
    -   کمپائل شدہ ایکزیکیوٹیبلز، لائبریریاں، اور دیگر آرٹیفیکٹس پھر آپ کی ورک اسپیس کی `install` ڈائرکٹری میں رکھے جاتے ہیں۔

**Useful `colcon build` Options:**

-   `--packages-select <package_name>`: Build only a specific package (and its dependencies). Useful for faster iteration when working on a single package.
    `colcon build --packages-select my_python_pkg`
-   `--packages-up-to <package_name>`: Build a specific package and all packages it depends on, but not packages that depend on it.
-   `--symlink-install`: This option is highly recommended for Python packages and can be useful for C++ too during development. It creates symbolic links in the `install` directory back to the source files for certain resources. This means that if you edit a Python script or a launch file, you don't need to rebuild the package; the changes are reflected immediately. For C++ headers, it also links them.
    `colcon build --symlink-install`
-   `--cmake-args -DCMAKE_BUILD_TYPE=Release`: Pass arguments directly to CMake. For C++ packages, you might want to build in `Release` mode for optimized performance or `Debug` mode for easier debugging.

**`colcon build` کے مفید اختیارات:**

-   `--packages-select <package_name>`: صرف ایک مخصوص پیکیج (اور اس کی ڈیپینڈنسیز) کو بلڈ کریں۔ جب کسی ایک پیکیج پر کام کر رہے ہوں تو تیز تر تکرار کے لیے مفید ہے۔
    `colcon build --packages-select my_python_pkg`
-   `--packages-up-to <package_name>`: ایک مخصوص پیکیج اور تمام پیکجز جن پر یہ انحصار کرتا ہے، انہیں بلڈ کریں، لیکن ان پیکجز کو نہیں جو اس پر انحصار کرتے ہیں۔
-   `--symlink-install`: یہ آپشن پائتھن پیکجز کے لیے انتہائی تجویز کردہ ہے اور ترقی کے دوران C++ کے لیے بھی مفید ہو سکتا ہے۔ یہ مخصوص وسائل کے لیے `install` ڈائرکٹری میں سورس فائلوں سے علامتی لنکس بناتا ہے۔ اس کا مطلب ہے کہ اگر آپ ایک پائتھن اسکرپٹ یا ایک لانچ فائل میں ترمیم کرتے ہیں، تو آپ کو پیکیج کو دوبارہ بلڈ کرنے کی ضرورت نہیں ہے؛ تبدیلیاں فوری طور پر ظاہر ہوتی ہیں۔ C++ ہیڈرز کے لیے، یہ انہیں بھی لنک کرتا ہے۔
    `colcon build --symlink-install`
-   `--cmake-args -DCMAKE_BUILD_TYPE=Release`: براہ راست CMake کو دلائل پاس کریں۔ C++ پیکجز کے لیے، آپ بہتر کارکردگی کے لیے `Release` موڈ میں یا آسان ڈیبگنگ کے لیے `Debug` موڈ میں بلڈ کرنا چاہیں گے۔

#### 2. Sourcing the Workspace

**Sourcing** a workspace means telling your shell where to find the executables, libraries, and other environment variables associated with your ROS 2 installation and your custom packages. Without sourcing, your terminal won't recognize `ros2` commands or your custom node executables.

**ورک اسپیس کو سورس کرنا** کا مطلب ہے اپنی شیل کو بتانا کہ آپ کی ROS 2 تنصیب اور آپ کے کسٹم پیکجز سے منسلک ایکزیکیوٹیبلز، لائبریریاں، اور دیگر ماحولیاتی متغیرات کو کہاں تلاش کرنا ہے۔ سورس کیے بغیر، آپ کا ٹرمینل `ros2` کمانڈز یا آپ کے کسٹم نوڈ ایکزیکیوٹیبلز کو نہیں پہچانے گا۔

**Steps to Source:**

1.  **Source the ROS 2 Installation (Underlay):**
    First, ensure that your base ROS 2 installation (e.g., Humble) is sourced. This provides the core `ros2` commands. If you added `source /opt/ros/humble/setup.bash` to your `~/.bashrc`, this happens automatically.

    **ROS 2 تنصیب کو سورس کریں (انڈرلے):**
    پہلے، یقینی بنائیں کہ آپ کی بنیادی ROS 2 تنصیب (مثلاً، Humble) سورس شدہ ہے۔ یہ بنیادی `ros2` کمانڈز فراہم کرتا ہے۔ اگر آپ نے `source /opt/ros/humble/setup.bash` اپنی `~/.bashrc` میں شامل کیا ہے، تو یہ خود بخود ہوتا ہے۔

2.  **Source Your Workspace (Overlay):**
    After building, your workspace will have a `install/setup.bash` (or `.zsh`, `.ps1` for other shells) file. Sourcing this file overlays your workspace on top of the base ROS 2 installation.

    **اپنی ورک اسپیس کو سورس کریں (اوورلے):**
    بلڈ کرنے کے بعد، آپ کی ورک اسپیس میں ایک `install/setup.bash` (یا دیگر شیلز کے لیے `.zsh`, `.ps1`) فائل ہوگی۔ اس فائل کو سورس کرنے سے آپ کی ورک اسپیس بنیادی ROS 2 تنصیب کے اوپر اوورلے ہو جاتی ہے۔

    ```bash
    source ~/ros2_ws/install/setup.bash
    ```

**Making Sourcing Persistent:**

Sourcing is only valid for the current terminal session. To avoid repeatedly typing the source command, you can add it to your shell's startup file (e.g., `~/.bashrc` for Bash, `~/.zshrc` for Zsh).

سورسنگ صرف موجودہ ٹرمینل سیشن کے لیے درست ہے۔ سورس کمانڈ کو بار بار ٹائپ کرنے سے بچنے کے لیے، آپ اسے اپنی شیل کی اسٹارٹ اپ فائل میں شامل کر سکتے ہیں (مثلاً، Bash کے لیے `~/.bashrc`، Zsh کے لیے `~/.zshrc`)۔

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc # Apply changes to the current terminal
```

**Order of Sourcing (انگریزی ترجمہ):**
It is crucial to maintain the correct order when sourcing multiple environments. Always source the base ROS 2 installation first, followed by your workspace. The `setup.bash` script in your workspace is designed to automatically source its underlay (the ROS 2 installation) if it hasn't been sourced already, making the process more convenient.

**سورسنگ کی ترتیب (اردو ترجمہ):**
متعدد ماحول کو سورس کرتے وقت صحیح ترتیب برقرار رکھنا بہت ضروری ہے۔ ہمیشہ پہلے بنیادی ROS 2 تنصیب کو سورس کریں، اس کے بعد اپنی ورک اسپیس کو۔ آپ کی ورک اسپیس میں `setup.bash` اسکرپٹ کو اس طرح ڈیزائن کیا گیا ہے کہ اگر اس کا انڈرلے (ROS 2 تنصیب) پہلے سے سورس نہیں ہوا ہے، تو وہ خود بخود اسے سورس کر لے گا، جس سے یہ عمل زیادہ آسان ہو جاتا ہے۔

Now your environment is fully set up, and you can start running your custom ROS 2 nodes and applications!

## Chapter 3: ROS 2 Nodes

In ROS 2, a **node** is an executable process that performs computation. Nodes are the fundamental building blocks of any ROS 2 application, responsible for tasks like sensing, controlling, planning, and more. This chapter will guide you through creating your first ROS 2 nodes in both Python and C++.

اب آپ کا ماحول مکمل طور پر سیٹ ہو چکا ہے، اور آپ اپنے کسٹم ROS 2 نوڈز اور ایپلی کیشنز چلانا شروع کر سکتے ہیں!

## باب 3: ROS 2 نوڈز

ROS 2 میں، ایک **نوڈ** ایک قابل عمل عمل ہے جو حساب کتاب انجام دیتا ہے۔ نوڈز کسی بھی ROS 2 ایپلی کیشن کے بنیادی تعمیراتی بلاکس ہیں، جو سینسنگ، کنٹرولنگ، منصوبہ بندی، اور بہت کچھ جیسے کاموں کے ذمہ دار ہیں۔ یہ باب آپ کو پائتھن اور C++ دونوں میں اپنے پہلے ROS 2 نوڈز بنانے میں رہنمائی کرے گا۔

### Creating a ROS 2 Node in Python

We will create a simple Python publisher node that periodically sends "Hello World" messages on a topic. This example uses the `rclpy` client library.

ہم ایک سادہ پائتھن پبلشر نوڈ بنائیں گے جو وقفے وقفے سے ایک ٹاپک پر "ہیلو ورلڈ" پیغامات بھیجتا ہے۔ یہ مثال `rclpy` کلائنٹ لائبریری کا استعمال کرتی ہے۔

#### 1. Create a Python Package (پائتھن پیکیج بنائیں)

If you haven't already, create a Python package named `py_pubsub` in your workspace's `src` directory:

اگر آپ نے پہلے سے نہیں بنایا ہے، تو اپنی ورک اسپیس کی `src` ڈائرکٹری میں `py_pubsub` نامی ایک پائتھن پیکیج بنائیں:

```bash
cd ~/ros2_ws/src
ros2 pkg create py_pubsub --build-type ament_python --dependencies rclpy std_msgs
```
This command creates the `py_pubsub` directory with `package.xml`, `setup.py`, `setup.cfg`, and `py_pubsub/__init__.py`.

یہ کمانڈ `py_pubsub` ڈائرکٹری کو `package.xml`، `setup.py`، `setup.cfg`، اور `py_pubsub/__init__.py` کے ساتھ بناتی ہے۔

#### 2. Create the Publisher Node (پبلشر نوڈ بنائیں)

Create a new Python file named `publisher_member_function.py` inside the `py_pubsub/py_pubsub/` directory (i.e., `~/ros2_ws/src/py_pubsub/py_pubsub/publisher_member_function.py`).

`py_pubsub/py_pubsub/` ڈائرکٹری (یعنی، `~/ros2_ws/src/py_pubsub/py_pubsub/publisher_member_function.py`) کے اندر `publisher_member_function.py` نامی ایک نئی پائتھن فائل بنائیں۔

```python
import rclpy                                         # Import the ROS 2 Python client library
from rclpy.node import Node                          # Import the base Node class
from std_msgs.msg import String                      # Import the String message type

class MinimalPublisher(Node):
    """
    A simple ROS 2 publisher node that publishes 'Hello World' messages.
    """
    def __init__(self):
        # Initialize the Node with the name 'minimal_publisher'
        super().__init__('minimal_publisher')
        # Create a publisher that publishes String messages to the 'topic' topic
        # with a queue size of 10. The queue size limits the number of messages
        # that can be stored if the subscriber is slow.
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds: define how often to publish
        # Create a timer that calls the timer_callback method every 0.5 seconds.
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0 # Counter for messages published

    def timer_callback(self):
        """
        Callback function executed by the timer.
        It creates a String message with a 'Hello World' string and a counter,
        then publishes it to the 'topic'.
        """
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data) # Log the published message to the console
        self.i += 1

def main(args=None):
    """
    Main function to initialize and run the ROS 2 node.
    """
    rclpy.init(args=args) # Initialize the rclpy client library

    minimal_publisher = MinimalPublisher() # Create an instance of our MinimalPublisher node

    rclpy.spin(minimal_publisher) # Keep the node alive, processing callbacks until Ctrl+C is pressed

    # Destroy the node once rclpy.spin() returns (e.g., on Ctrl+C)
    minimal_publisher.destroy_node()
    rclpy.shutdown() # Shutdown the rclpy client library

if __name__ == '__main__':
    main()
```
**Explanation of the Code (کوڈ کی وضاحت):**
-   **`import rclpy`**: Imports the necessary ROS 2 Python client library.
-   **`from rclpy.node import Node`**: Imports the `Node` class, which is the base class for all ROS 2 nodes.
-   **`from std_msgs.msg import String`**: Imports the `String` message type from the `std_msgs` package. This defines the format of the data we will be publishing.
-   **`class MinimalPublisher(Node):`**: Defines our custom node class, inheriting from `rclpy.node.Node`.
-   **`super().__init__('minimal_publisher')`**: Calls the `Node` class constructor, giving our node the name `minimal_publisher`.
-   **`self.publisher_ = self.create_publisher(String, 'topic', 10)`**: Creates a publisher object.
    -   `String`: The message type to publish.
    -   `'topic'`: The name of the topic to publish to.
    -   `10`: The Quality of Service (QoS) history depth, indicating the size of the message queue.
-   **`self.timer = self.create_timer(timer_period, self.timer_callback)`**: Creates a timer that will call `self.timer_callback` every `0.5` seconds.
-   **`timer_callback()`**: This function is executed by the timer. It creates a `String` message with "Hello World" and a counter, publishes it, and logs it.
-   **`rclpy.init(args=args)`**: Initializes the `rclpy` library. This must be called before any ROS 2 operations.
-   **`rclpy.spin(minimal_publisher)`**: Keeps the node running and processing callbacks (like the timer callback) until the node is explicitly shut down (e.g., by pressing Ctrl+C).
-   **`minimal_publisher.destroy_node()`**: Cleans up resources used by the node.
-   **`rclpy.shutdown()`**: Shuts down the `rclpy` library.

**کوڈ کی وضاحت:**
-   **`import rclpy`**: ضروری ROS 2 پائتھن کلائنٹ لائبریری کو درآمد کرتا ہے۔
-   **`from rclpy.node import Node`**: `Node` کلاس کو درآمد کرتا ہے، جو تمام ROS 2 نوڈز کے لیے بنیادی کلاس ہے۔
-   **`from std_msgs.msg import String`**: `std_msgs` پیکیج سے `String` میسج ٹائپ کو درآمد کرتا ہے۔ یہ اس ڈیٹا کی فارمیٹ کی وضاحت کرتا ہے جسے ہم پبلش کریں گے۔
-   **`class MinimalPublisher(Node):`**: ہماری کسٹم نوڈ کلاس کی تعریف کرتا ہے، جو `rclpy.node.Node` سے وراثت میں ملتی ہے۔
-   **`super().__init__('minimal_publisher')`**: `Node` کلاس کنسٹرکٹر کو کال کرتا ہے، ہمارے نوڈ کو `minimal_publisher` نام دیتا ہے۔
-   **`self.publisher_ = self.create_publisher(String, 'topic', 10)`**: ایک پبلشر آبجیکٹ بناتا ہے۔
    -   `String`: پبلش کرنے کے لیے میسج ٹائپ۔
    -   `'topic'`: پبلش کرنے کے لیے ٹاپک کا نام۔
    -   `10`: کوالٹی آف سروس (QoS) ہسٹری ڈیپتھ، جو میسج کیو کے سائز کی نشاندہی کرتی ہے۔
-   **`self.timer = self.create_timer(timer_period, self.timer_callback)`**: ایک ٹائمر بناتا ہے جو ہر `0.5` سیکنڈ پر `self.timer_callback` کو کال کرے گا۔
-   **`timer_callback()`**: یہ فنکشن ٹائمر کے ذریعے چلایا جاتا ہے۔ یہ "ہیلو ورلڈ" اور ایک کاؤنٹر کے ساتھ ایک `String` میسج بناتا ہے، اسے پبلش کرتا ہے، اور اسے لاگ کرتا ہے۔
-   **`rclpy.init(args=args)`**: `rclpy` لائبریری کو شروع کرتا ہے۔ یہ کسی بھی ROS 2 آپریشن سے پہلے کال کیا جانا چاہیے۔
-   **`rclpy.spin(minimal_publisher)`**: نوڈ کو چلاتا رہتا ہے اور کال بیکس (جیسے ٹائمر کال بیک) پر کارروائی کرتا رہتا ہے جب تک کہ نوڈ کو واضح طور پر بند نہ کر دیا جائے (مثلاً، Ctrl+C دبانے سے)۔
-   **`minimal_publisher.destroy_node()`**: نوڈ کے ذریعے استعمال کیے گئے وسائل کو صاف کرتا ہے۔
-   **`rclpy.shutdown()`**: `rclpy` لائبریری کو بند کرتا ہے۔

#### 3. Modify `setup.py` (setup.py میں ترمیم کریں)

To make your Python script executable as a ROS 2 node using `ros2 run`, you need to add an entry point in your package's `setup.py` file. Open `~/ros2_ws/src/py_pubsub/setup.py` and modify the `entry_points` dictionary as follows:

اپنے پائتھن اسکرپٹ کو `ros2 run` کا استعمال کرتے ہوئے ROS 2 نوڈ کے طور پر قابل عمل بنانے کے لیے، آپ کو اپنے پیکیج کی `setup.py` فائل میں ایک انٹری پوائنٹ شامل کرنے کی ضرورت ہے۔ `~/ros2_ws/src/py_pubsub/setup.py` کھولیں اور `entry_points` ڈکشنری کو مندرجہ ذیل طریقے سے ترمیم کریں:

```python
# ... (other parts of setup.py) ...

entry_points={
    'console_scripts': [
        'talker = py_pubsub.publisher_member_function:main', # Add this line
    ],
},
```
-   This line tells ROS 2 to create an executable named `talker` that, when run, will execute the `main()` function from the `publisher_member_function` module within the `py_pubsub` Python package.

-   یہ لائن ROS 2 کو `talker` نامی ایک قابل عمل بنانے کا بتاتی ہے جو چلنے پر، `py_pubsub` پائتھن پیکیج کے اندر `publisher_member_function` ماڈیول سے `main()` فنکشن کو چلائے گا۔

#### 4. Build and Run (بلڈ کریں اور چلائیں)

Now, build your workspace and run the node.

اب، اپنی ورک اسپیس کو بلڈ کریں اور نوڈ کو چلائیں۔

1.  **Navigate to your workspace root:**
    ```bash
    cd ~/ros2_ws
    ```
2.  **Build your package:**
    ```bash
    colcon build --packages-select py_pubsub
    ```
    This compiles your Python package and installs it into the `install` directory.
3.  **Source your workspace:**
    ```bash
    source install/setup.bash
    ```
    Remember to do this in every new terminal or add it to your `~/.bashrc`.
4.  **Run the publisher node:**
    ```bash
    ros2 run py_pubsub talker
    ```
    You should see the node start publishing "Hello World" messages.

    آپ نوڈ کو "ہیلو ورلڈ" پیغامات پبلش کرتے ہوئے دیکھیں گے۔

5.  **Verify with a listener (optional):**
    Open a new terminal, source your workspace, and use `ros2 topic echo` to see the messages:
    ```bash
    source install/setup.bash
    ros2 topic echo /topic
    ```
    You should see the messages being printed, confirming your publisher is working correctly.

    آپ کو پیغامات پرنٹ ہوتے ہوئے نظر آئیں گے، اس بات کی تصدیق کرتے ہوئے کہ آپ کا پبلشر صحیح طریقے سے کام کر رہا ہے۔







