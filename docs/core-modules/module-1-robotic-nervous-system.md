---
title: "Module 1: The Robotic Nervous System (ROS 2)"
---

# Module 1: The Robotic Nervous System (ROS 2)

This module covers the fundamentals of the Robot Operating System (ROS 2), the nervous system of our robots.

## Introduction to ROS 2: The Robotic Nervous System

The Robot Operating System 2 (ROS 2) is a flexible framework for writing robot software. It is not an operating system in the traditional sense, but rather a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behaviors across a wide variety of robotic platforms. ROS 2 is the successor to ROS 1, engineered to address the limitations of its predecessor and meet the evolving demands of the modern robotics industry, especially for production-grade applications.

### Why ROS 2 is Used

ROS 2 has gained significant traction in the robotics community due to several key advantages:

*   **Production Readiness:** Unlike ROS 1, which was primarily developed for research and prototyping, ROS 2 was built with industrial applications in mind. It focuses on reliability, safety, and performance suitable for real-world deployment and critical systems.
*   **Shortened Time to Market:** By providing a comprehensive set of pre-built tools, libraries, and established conventions, ROS 2 significantly accelerates the development process. This allows engineers to focus on innovative robot functionalities rather than reinventing fundamental communication or control mechanisms.
*   **Cross-platform Compatibility:** ROS 2 supports major operating systems including Linux (Ubuntu, Debian), Windows, and macOS. This broad compatibility offers flexibility in development and deployment environments and allows for easier integration with existing IT infrastructures. It can also be adapted for real-time operating systems (RTOS) and embedded platforms.
*   **Multi-robot Systems:** ROS 2 provides robust mechanisms for managing and orchestrating multiple robots. It facilitates communication, coordination, and collaboration between distinct robotic entities, which is crucial for complex tasks in logistics, manufacturing, and exploration.
*   **No Vendor Lock-in:** As an open-source framework, ROS 2 offers immense flexibility. Developers can customize, extend, and adapt the system to their specific needs without being tied to proprietary hardware or software solutions.
*   **Improved Communication Architecture:** A fundamental improvement over ROS 1 is its decentralized communication. ROS 2 utilizes the Data Distribution Service (DDS) as its middleware, eliminating the single point of failure (the ROS Master) present in ROS 1. This results in more robust, scalable, and real-time capable communication.

### Key Features of ROS 2

ROS 2 introduces several powerful features that enhance its capabilities for advanced robotics development:

*   **Data Distribution Service (DDS):** This is the core communication middleware of ROS 2. DDS provides a decentralized, peer-to-peer communication model that supports various Quality of Service (QoS) policies (e.g., reliability, history, deadline). This ensures efficient, real-time, and flexible data exchange between different components of a robotic system.
*   **Enhanced Security:** Security is a paramount concern for modern robotic systems, especially in industrial or public environments. ROS 2 incorporates robust security features based on the DDS-Security specification, including authentication, encryption, and access control, making robotic applications more secure against cyber threats.
*   **Real-time Capabilities:** Many robotic applications, particularly those involving precise motion control or critical safety functions, require deterministic timing. ROS 2 is designed with real-time performance in mind, allowing developers to build applications that meet strict timing requirements.
*   **Multi-language Support:** While C++ (`rclcpp`) and Python (`rclpy`) remain the primary client libraries, ROS 2's architecture supports the development of client libraries in other languages (e.g., Rust, Java, JavaScript), fostering a broader developer ecosystem.
*   **Modular Design:** ROS 2 promotes a modular approach to robot software development. Components are designed as independent nodes that communicate through well-defined interfaces, making it easier to develop, test, and maintain complex systems. It also allows for easier integration of new hardware, algorithms, and software modules.
*   **Rich Ecosystem of Tools:** ROS 2 comes with a comprehensive suite of development and debugging tools. Examples include `ros2 run` for executing nodes, `ros2 launch` for orchestrating multiple nodes and configurations, `ros2 topic` for inspecting topic communication, `rosbag` for data recording and playback, and RViz2 for 3D visualization of robot data.

---

## ROS 2 کا تعارف: روبوٹک اعصابی نظام

روبوٹ آپریٹنگ سسٹم 2 (ROS 2) روبوٹ سافٹ ویئر لکھنے کے لیے ایک لچکدار فریم ورک ہے۔ یہ روایتی معنوں میں کوئی آپریٹنگ سسٹم نہیں ہے، بلکہ یہ ٹولز، لائبریریوں اور کنونشنز کا ایک مجموعہ ہے جس کا مقصد روبوٹک پلیٹ فارمز کی وسیع رینج پر پیچیدہ اور مضبوط روبوٹ رویوں کی تخلیق کے کام کو آسان بنانا ہے۔ ROS 2، ROS 1 کا جانشین ہے، جسے اس کے پیشرو کی خامیوں کو دور کرنے اور جدید روبوٹکس صنعت کے بڑھتے ہوئے مطالبات کو پورا کرنے کے لیے ڈیزائن کیا گیا ہے، خاص طور پر پیداواری درجے کی ایپلی کیشنز کے لیے۔

### ROS 2 کیوں استعمال ہوتا ہے؟

ROS 2 نے کئی اہم فوائد کی وجہ سے روبوٹکس کمیونٹی میں نمایاں اہمیت حاصل کی ہے:

*   **پیداواری تیاری (Production Readiness):** ROS 1 کے برعکس، جسے بنیادی طور پر تحقیق اور پروٹو ٹائپنگ کے لیے تیار کیا گیا تھا، ROS 2 کو صنعتی ایپلی کیشنز کو ذہن میں رکھ کر بنایا گیا تھا۔ یہ حقیقی دنیا کی تعیناتی اور اہم نظاموں کے لیے موزوں اعتبار، حفاظت اور کارکردگی پر توجہ مرکوز کرتا ہے۔
*   **مارکیٹ تک رسائی میں کمی (Shortened Time to Market):** پہلے سے بنے ہوئے ٹولز، لائبریریوں اور قائم شدہ کنونشنز کا ایک جامع سیٹ فراہم کرکے، ROS 2 ترقی کے عمل کو نمایاں طور پر تیز کرتا ہے۔ یہ انجینئرز کو بنیادی مواصلاتی یا کنٹرول میکانزم کو دوبارہ ایجاد کرنے کے بجائے جدید روبوٹ کی فعالیت پر توجہ مرکوز کرنے کی اجازت دیتا ہے۔
*   **کراس پلیٹ فارم مطابقت (Cross-platform Compatibility):** ROS 2 بڑے آپریٹنگ سسٹمز بشمول لینکس (اوبنٹو، ڈیبین)، ونڈوز اور macOS کو سپورٹ کرتا ہے۔ یہ وسیع مطابقت ترقی اور تعیناتی کے ماحول میں لچک پیش کرتی ہے اور موجودہ آئی ٹی انفراسٹرکچر کے ساتھ آسان انضمام کی اجازت دیتی ہے۔ اسے ریئل ٹائم آپریٹنگ سسٹمز (RTOS) اور ایمبیڈڈ پلیٹ فارمز کے لیے بھی ڈھالا جا سکتا ہے۔
*   **ملٹی روبوٹ سسٹمز (Multi-robot Systems):** ROS 2 متعدد روبوٹس کو منظم اور مربوط کرنے کے لیے مضبوط میکانزم فراہم کرتا ہے۔ یہ الگ الگ روبوٹک اکائیوں کے درمیان مواصلت، ہم آہنگی اور تعاون کو آسان بناتا ہے، جو لاجسٹکس، مینوفیکچرنگ اور ایکسپلوریشن میں پیچیدہ کاموں کے لیے بہت اہم ہے۔
*   **وینڈر لاک ان نہیں (No Vendor Lock-in):** ایک اوپن سورس فریم ورک کے طور پر، ROS 2 بے پناہ لچک پیش کرتا ہے۔ ڈویلپرز اپنی مخصوص ضروریات کے مطابق سسٹم کو اپنی مرضی کے مطابق بنا سکتے ہیں، بڑھا سکتے ہیں اور ڈھال سکتے ہیں بغیر کسی ملکیتی ہارڈ ویئر یا سافٹ ویئر سلوشنز کے پابند ہوئے۔
*   **بہتر مواصلاتی فن تعمیر (Improved Communication Architecture):** ROS 1 کے مقابلے میں ایک بنیادی بہتری اس کی وکندریقرت مواصلات (decentralized communication) ہے۔ ROS 2 اپنے مڈل ویئر کے طور پر ڈیٹا ڈسٹری بیوشن سروس (DDS) کا استعمال کرتا ہے، جو ROS 1 میں موجود واحد ناکامی کے مقام (ROS ماسٹر) کو ختم کرتا ہے۔ اس کے نتیجے میں زیادہ مضبوط، قابل توسیع اور ریئل ٹائم قابل مواصلات حاصل ہوتی ہے۔

### ROS 2 کی اہم خصوصیات

ROS 2 کئی طاقتور خصوصیات پیش کرتا ہے جو جدید روبوٹکس کی ترقی کے لیے اس کی صلاحیتوں کو بڑھاتی ہیں:

*   **ڈیٹا ڈسٹری بیوشن سروس (DDS):** یہ ROS 2 کا بنیادی مواصلاتی مڈل ویئر ہے۔ DDS ایک وکندریقرت، پیر-ٹو-پیر مواصلاتی ماڈل فراہم کرتا ہے جو مختلف کوالٹی آف سروس (QoS) پالیسیوں (مثلاً، اعتبار، تاریخ، ڈیڈ لائن) کو سپورٹ کرتا ہے۔ یہ روبوٹک نظام کے مختلف اجزاء کے درمیان موثر، ریئل ٹائم اور لچکدار ڈیٹا کے تبادلے کو یقینی بناتا ہے۔
*   **بہتر سیکیورٹی (Enhanced Security):** جدید روبوٹک سسٹمز کے لیے سیکیورٹی ایک اہم تشویش ہے، خاص طور پر صنعتی یا عوامی ماحول میں۔ ROS 2 DDS-Security کی تفصیلات پر مبنی مضبوط سیکیورٹی خصوصیات کو شامل کرتا ہے، بشمول تصدیق، خفیہ کاری اور رسائی کنٹرول، جو روبوٹک ایپلی کیشنز کو سائبر خطرات کے خلاف زیادہ محفوظ بناتا ہے۔
*   **ریئل ٹائم صلاحیتیں (Real-time Capabilities):** بہت سے روبوٹک ایپلی کیشنز، خاص طور پر وہ جن میں درست حرکت کنٹرول یا اہم حفاظتی افعال شامل ہوتے ہیں، کو فیصلہ کن وقت کی ضرورت ہوتی ہے۔ ROS 2 کو ریئل ٹائم کارکردگی کو مدنظر رکھتے ہوئے ڈیزائن کیا گیا ہے، جس سے ڈویلپرز کو ایسی ایپلی کیشنز بنانے کی سہولت ملتی ہے جو سخت وقت کی ضروریات کو پورا کرتی ہیں۔
*   **متعدد زبانوں کی حمایت (Multi-language Support):** اگرچہ C++ (`rclcpp`) اور Python (`rclpy`) بنیادی کلائنٹ لائبریریاں ہیں، ROS 2 کا فن تعمیر دیگر زبانوں (مثلاً، Rust، Java، JavaScript) میں کلائنٹ لائبریریوں کی ترقی کو سپورٹ کرتا ہے، جو ایک وسیع تر ڈویلپر ایکو سسٹم کو فروغ دیتا ہے۔
*   **ماڈیولر ڈیزائن (Modular Design):** ROS 2 روبوٹ سافٹ ویئر کی ترقی کے لیے ایک ماڈیولر نقطہ نظر کو فروغ دیتا ہے۔ اجزاء کو آزاد نوڈز کے طور پر ڈیزائن کیا گیا ہے جو اچھی طرح سے طے شدہ انٹرفیس کے ذریعے بات چیت کرتے ہیں، جس سے پیچیدہ نظاموں کو تیار کرنا، ٹیسٹ کرنا اور برقرار رکھنا آسان ہو جاتا ہے۔ یہ نئے ہارڈ ویئر، الگورتھم اور سافٹ ویئر ماڈیولز کے آسان انضمام کی بھی اجازت دیتا ہے۔
*   **ٹولز کا بھرپور ایکو سسٹم (Rich Ecosystem of Tools):** ROS 2 ترقی اور ڈیبگنگ ٹولز کے ایک جامع سوٹ کے ساتھ آتا ہے۔ مثالوں میں نوڈز کو چلانے کے لیے `ros2 run`، متعدد نوڈز اور کنفیگریشنز کو مربوط کرنے کے لیے `ros2 launch`، ٹاپک مواصلات کا معائنہ کرنے کے لیے `ros2 topic`، ڈیٹا ریکارڈنگ اور پلے بیک کے لیے `rosbag`، اور روبوٹ ڈیٹا کی 3D ویژولائزیشن کے لیے RViz2 شامل ہیں۔

---

## Core Concepts: Nodes

In ROS 2, a **Node** is the fundamental unit of computation. Imagine a robot's brain and body systems divided into many specialized organs; each of these organs would be analogous to a ROS 2 node. Each node is an executable process that performs a specific task, such as reading sensor data, controlling a motor, performing a calculation, or running a navigation algorithm.

Nodes are designed to be modular and independent, allowing for a distributed and robust system architecture. This modularity means that if one part of the robot's functionality fails, other parts can continue operating, and the faulty node can be restarted or replaced without affecting the entire system.

### How Nodes Communicate

Nodes in ROS 2 communicate with each other using various mechanisms, facilitated by client libraries like `rclcpp` (for C++) and `rclpy` (for Python). These mechanisms include:

*   **Topics:** This is a publish/subscribe communication model used for continuous, one-way streaming of data. A node can *publish* messages to a named topic, and any other node *subscribed* to that topic will receive those messages. For example, a camera node might publish image data to an "image" topic, and an image processing node might subscribe to it.
*   **Services:** Services are used for synchronous request/response interactions. A client node sends a *request* to a service server node and waits for a *response*. This is suitable for tasks that require a immediate answer, such as asking a motion planning node to calculate a path or commanding a robot arm to perform a specific movement and waiting for confirmation.
*   **Actions:** Actions are designed for long-running tasks that may take a significant amount of time to complete. Unlike services, actions provide periodic *feedback* about the task's progress and allow for *preemption* (canceling the task before it finishes). An action client sends a *goal* to an action server, which executes the task and sends back feedback, a final *result*, and can be canceled if needed. This is ideal for tasks like navigating to a distant location or picking up an object.
*   **Parameters:** Parameters allow nodes to expose configurable values that can be changed dynamically at runtime. This enables users to adjust a node's behavior without restarting it. For instance, a navigation node might have a "speed limit" parameter that can be adjusted on the fly.

A single ROS 2 node can be quite complex, encompassing multiple publishers, subscribers, service clients/servers, and action clients/servers simultaneously, all working together to achieve its specific function within the robotic system.

---

## بنیادی تصورات: نوڈز (Nodes)

ROS 2 میں، **نوڈ (Node)** حساب کتاب کی بنیادی اکائی ہے۔ روبوٹ کے دماغ اور جسم کے نظام کو بہت سے خصوصی اعضاء میں تقسیم کرنے کا تصور کریں؛ ان اعضاء میں سے ہر ایک ROS 2 نوڈ کے مماثل ہوگا۔ ہر نوڈ ایک قابل عمل عمل (executable process) ہے جو ایک مخصوص کام انجام دیتا ہے، جیسے سینسر ڈیٹا پڑھنا، موٹر کو کنٹرول کرنا، حساب کتاب کرنا، یا نیویگیشن الگورتھم چلانا۔

نوڈز کو ماڈیولر اور آزاد ہونے کے لیے ڈیزائن کیا گیا ہے، جو تقسیم شدہ اور مضبوط سسٹم آرکیٹیکچر کی اجازت دیتا ہے۔ اس ماڈیولرٹی کا مطلب ہے کہ اگر روبوٹ کی فعالیت کا ایک حصہ ناکام ہوجاتا ہے، تو دوسرے حصے کام جاری رکھ سکتے ہیں، اور خراب نوڈ کو پورے سسٹم کو متاثر کیے بغیر دوبارہ شروع یا تبدیل کیا جاسکتا ہے۔

### نوڈز کیسے بات چیت کرتے ہیں (How Nodes Communicate)

ROS 2 میں نوڈز مختلف میکانزم کا استعمال کرتے ہوئے ایک دوسرے کے ساتھ بات چیت کرتے ہیں، جسے کلائنٹ لائبریریاں جیسے `rclcpp` (C++ کے لیے) اور `rclpy` (پائتھن کے لیے) سہولت فراہم کرتی ہیں۔ ان میکانزم میں شامل ہیں:

*   **ٹاپکس (Topics):** یہ ڈیٹا کی مسلسل، یک طرفہ سٹریمنگ کے لیے استعمال ہونے والا پبلش/سبسکرائب مواصلاتی ماڈل ہے۔ ایک نوڈ ایک نامزد ٹاپک پر پیغامات *پبلش* کر سکتا ہے، اور کوئی بھی دوسرا نوڈ جو اس ٹاپک کو *سبسکرائب* کرتا ہے وہ پیغامات وصول کرے گا۔ مثال کے طور پر، ایک کیمرہ نوڈ "image" ٹاپک پر تصویری ڈیٹا پبلش کر سکتا ہے، اور ایک امیج پروسیسنگ نوڈ اسے سبسکرائب کر سکتا ہے۔
*   **سروسز (Services):** سروسز ہم وقت ساز (synchronous) درخواست/جواب (request/response) تعاملات کے لیے استعمال ہوتی ہیں۔ ایک کلائنٹ نوڈ ایک سروس سرور نوڈ کو *درخواست (request)* بھیجتا ہے اور *جواب (response)* کا انتظار کرتا ہے۔ یہ ایسے کاموں کے لیے موزوں ہے جن کے لیے فوری جواب کی ضرورت ہوتی ہے، جیسے کہ موشن پلاننگ نوڈ سے راستہ کا حساب لگانے کا کہنا یا روبوٹ بازو کو ایک مخصوص حرکت کرنے کا حکم دینا اور تصدیق کا انتظار کرنا۔
*   **ایکشنز (Actions):** ایکشنز طویل عرصے تک چلنے والے کاموں کے لیے ڈیزائن کیے گئے ہیں جن کو مکمل ہونے میں کافی وقت لگ سکتا ہے۔ سروسز کے برعکس، ایکشنز کام کی پیشرفت کے بارے میں وقتاً فوقتاً *فیڈ بیک* فراہم کرتے ہیں اور *پریمپشن* (کام مکمل ہونے سے پہلے اسے منسوخ کرنا) کی اجازت دیتے ہیں۔ ایک ایکشن کلائنٹ ایک ایکشن سرور کو *مقصد (goal)* بھیجتا ہے، جو کام کو انجام دیتا ہے اور فیڈ بیک، ایک حتمی *نتیجہ (result)* واپس بھیجتا ہے، اور ضرورت پڑنے پر منسوخ بھی کیا جا سکتا ہے۔ یہ دور دراز مقام پر نیویگیٹ کرنے یا کسی چیز کو اٹھانے جیسے کاموں کے لیے مثالی ہے۔
*   **پیرامیٹرز (Parameters):** پیرامیٹرز نوڈز کو قابل ترتیب اقدار (configurable values) کو ظاہر کرنے کی اجازت دیتے ہیں جنہیں رن ٹائم پر متحرک طور پر تبدیل کیا جاسکتا ہے۔ یہ صارفین کو نوڈ کو دوبارہ شروع کیے بغیر اس کے رویے کو ایڈجسٹ کرنے کے قابل بناتا ہے۔ مثال کے طور پر، ایک نیویگیشن نوڈ میں ایک "رفتار کی حد" پیرامیٹر ہوسکتا ہے جسے فوری طور پر ایڈجسٹ کیا جاسکتا ہے۔

ایک واحد ROS 2 نوڈ کافی پیچیدہ ہوسکتا ہے، جس میں متعدد پبلشرز، سبسکرائبرز، سروس کلائنٹ/سرورز، اور ایکشن کلائنٹ/سرورز بیک وقت شامل ہوتے ہیں، یہ سب روبوٹک سسٹم کے اندر اپنے مخصوص فنکشن کو حاصل کرنے کے لیے مل کر کام کرتے ہیں۔

### Topics

**Topics** are a key communication mechanism in ROS 2, primarily used for asynchronous, one-way streaming of data. They implement a **publish/subscribe** messaging pattern, which allows different nodes in a ROS 2 system to exchange information in a decoupled and efficient manner.

### موضوعات

ROS 2 میں **ٹاپکس (Topics)** مواصلات کا ایک اہم طریقہ کار ہیں، جو بنیادی طور پر ڈیٹا کے غیر ہم وقت ساز، یک طرفہ سٹریمنگ کے لیے استعمال ہوتے ہیں۔ وہ ایک **پبلش/سبسکرائب (publish/subscribe)** پیغام رسانی کا نمونہ نافذ کرتے ہیں، جو ROS 2 سسٹم میں مختلف نوڈز کو معلومات کو غیر مربوط اور موثر طریقے سے تبادلہ کرنے کی اجازت دیتا ہے۔

#### Publish/Subscribe Mechanism

The publish/subscribe mechanism forms the core of topic communication.

#### پبلش/سبسکرائب طریقہ کار

پبلش/سبسکرائب طریقہ کار ٹاپک مواصلات کا بنیادی حصہ بناتا ہے۔

*   **Publishers:** A node that wants to share information creates a "publisher" for a specific topic. It then continuously sends (publishes) messages containing data to this topic.

*   **پبلشرز (Publishers):** ایک نوڈ جو معلومات کا اشتراک کرنا چاہتا ہے وہ ایک مخصوص ٹاپک کے لیے "پبلشر" بناتا ہے۔ پھر یہ اس ٹاپک پر ڈیٹا پر مشتمل پیغامات مسلسل بھیجتا (پبلش کرتا) ہے۔

*   **Subscribers:** Any node interested in receiving this information creates a "subscriber" for the *same* topic. It "tunes in" to the topic and automatically receives all messages published to it.

*   **سبسکرائبرز (Subscribers):** کوئی بھی نوڈ جو یہ معلومات حاصل کرنے میں دلچسپی رکھتا ہے وہ اسی ٹاپک کے لیے ایک "سبسکرائبر" بناتا ہے۔ یہ ٹاپک پر "ٹیون اِن" کرتا ہے اور اس پر پبلش ہونے والے تمام پیغامات خود بخود وصول کرتا ہے۔

#### Key Characteristics of Topics

Topics possess several key characteristics that make them suitable for dynamic robotic systems:

#### ٹاپکس کی اہم خصوصیات

ٹاپکس میں کئی اہم خصوصیات ہوتی ہیں جو انہیں متحرک روبوٹک سسٹمز کے لیے موزوں بناتی ہیں:

*   **Loose Coupling:** Publishers and subscribers do not need to know about each other's existence. They only need to agree on the topic's name and the type of message being exchanged. This makes the system flexible and easier to maintain.

*   **لوز کپلنگ (Loose Coupling):** پبلشرز اور سبسکرائبرز کو ایک دوسرے کے وجود کے بارے میں جاننے کی ضرورت نہیں ہے۔ انہیں صرف ٹاپک کے نام اور پیغام کی قسم پر اتفاق کرنے کی ضرورت ہوتی ہے جس کا تبادلہ کیا جا رہا ہے۔ یہ نظام کو لچکدار اور برقرار رکھنے میں آسان بناتا ہے۔

*   **Asynchronous Communication:** Communication via topics is non-blocking. Publishers send messages without waiting for subscribers to acknowledge receipt, and subscribers receive messages as they arrive. This allows nodes to operate independently and in parallel.

*   **غیر ہم وقت ساز مواصلات (Asynchronous Communication):** ٹاپکس کے ذریعے مواصلات نان-بلا کنگ ہوتی ہے۔ پبلشرز سبسکرائبرز کے رسید کی تصدیق کا انتظار کیے بغیر پیغامات بھیجتے ہیں، اور سبسکرائبرز پیغامات موصول ہوتے ہی وصول کرتے ہیں۔ یہ نوڈز کو آزادانہ اور متوازی طور پر کام کرنے کی اجازت دیتا ہے۔

*   **Anonymity:** Publishers typically don't know how many subscribers are listening or even if any subscribers exist. Similarly, subscribers don't usually know which specific publisher sent a message.

*   **گمنامی (Anonymity):** پبلشرز عام طور پر یہ نہیں جانتے کہ کتنے سبسکرائبرز سن رہے ہیں یا کوئی سبسکرائبر موجود ہے بھی یا نہیں۔ اسی طرح، سبسکرائبرز عام طور پر یہ نہیں جانتے کہ کون سے مخصوص پبلشر نے پیغام بھیجا ہے۔

*   **Strongly-typed Messages:** Each topic is associated with a specific message type (e.g., `std_msgs/msg/String`, `geometry_msgs/msg/Twist`). This message type defines the structure and data types of the information being exchanged, ensuring consistency and preventing errors. Topics are generally used for continuous data streams like sensor readings (e.g., camera images, LiDAR scans), robot odometry, or control commands (e.g., velocity commands for a mobile robot).

*   **مضبوطی سے ٹائپ شدہ پیغامات (Strongly-typed Messages):** ہر ٹاپک ایک مخصوص پیغام کی قسم کے ساتھ منسلک ہوتا ہے (مثلاً، `std_msgs/msg/String`، `geometry_msgs/msg/Twist`)۔ یہ پیغام کی قسم معلومات کے تبادلے کے ڈھانچے اور ڈیٹا کی اقسام کی وضاحت کرتی ہے، مستقل مزاجی کو یقینی بناتی ہے اور غلطیوں کو روکتی ہے۔ ٹاپکس عام طور پر مسلسل ڈیٹا سٹریمز جیسے سینسر ریڈنگز (مثلاً، کیمرہ امیجز، LiDAR سکینز)، روبوٹ اوڈومیٹری، یا کنٹرول کمانڈز (مثلاً، موبائل روبوٹ کے لیے ویلوسیٹی کمانڈز) کے لیے استعمال ہوتے ہیں۔

#### Example: Controlling a Turtle in `turtlesim`

A classic example demonstrating ROS 2 topics involves the `turtlesim` simulation.

1.  **Starting `turtlesim`:**
    ```bash
    ros2 run turtlesim turtlesim_node
    ros2 run turtlesim turtle_teleop_key
    ```
    This launches a graphical window with a turtle and a teleoperation node that allows controlling the turtle with keyboard inputs.

2.  **Identifying Topics:**
    You can list all active topics in your ROS 2 system using:
    ```bash
    ros2 topic list
    ```
    This command would reveal topics such as `/turtle1/cmd_vel`, `/turtle1/color_sensor`, and `/turtle1/pose`. The `/turtle1/cmd_vel` topic is particularly interesting as it's used to send velocity commands to the turtle.

3.  **Inspecting Topic Information:**
    To understand the data structure of a topic, you can use:
    ```bash
    ros2 topic info /turtle1/cmd_vel
    ```
    This would show that the message type for `/turtle1/cmd_vel` is `geometry_msgs/msg/Twist`, which contains fields for linear and angular velocities.

4.  **Echoing Topic Data:**
    To observe the messages being published to a topic in real-time, use the `echo` command:
    ```bash
    ros2 topic echo /turtle1/cmd_vel
    ```
    As you use the arrow keys in the `turtle_teleop_key` terminal, you'll see `Twist` messages being printed, showing the linear and angular velocity commands.

5.  **Manually Publishing to a Topic:**
    You can also manually publish a message to a topic from the command line:
    ```bash
    ros2 topic pub --once /turtle1/cmd_vel geometry_msgs/msg/Twist "{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: 1.8}}"
    ```
    This command sends a single `Twist` message to `/turtle1/cmd_vel`, causing the turtle to move forward with a linear velocity of 2.0 and turn with an angular velocity of 1.8. In this scenario, `turtle_teleop_key` acts as a publisher to `/turtle1/cmd_vel`, and `turtlesim_node` acts as a subscriber.

#### مثال: `turtlesim` میں ایک کچھوے کو کنٹرول کرنا

ROS 2 ٹاپکس کو ظاہر کرنے والی ایک کلاسک مثال `turtlesim` سمولیشن ہے۔

1.  **`turtlesim` شروع کرنا:**
    ```bash
    ros2 run turtlesim turtlesim_node
    ros2 run turtlesim turtle_teleop_key
    ```
    یہ ایک کچھوے کے ساتھ ایک گرافیکل ونڈو اور ایک ٹیلی آپریشن نوڈ لانچ کرتا ہے جو کی بورڈ ان پٹس کے ساتھ کچھوے کو کنٹرول کرنے کی اجازت دیتا ہے۔

2.  **ٹاپکس کی شناخت:**
    آپ اپنے ROS 2 سسٹم میں تمام فعال ٹاپکس کو اس طرح درج کر سکتے ہیں:
    ```bash
    ros2 topic list
    ```
    یہ کمانڈ ایسے ٹاپکس کو ظاہر کرے گی جیسے `/turtle1/cmd_vel`، `/turtle1/color_sensor`، اور `/turtle1/pose`۔ `/turtle1/cmd_vel` ٹاپک خاص طور پر دلچسپ ہے کیونکہ اسے کچھوے کو ویلوسیٹی کمانڈز بھیجنے کے لیے استعمال کیا جاتا ہے۔

3.  **ٹاپک کی معلومات کا معائنہ:**
    کسی ٹاپک کے ڈیٹا ڈھانچے کو سمجھنے کے لیے، آپ استعمال کر سکتے ہیں:
    ```bash
    ros2 topic info /turtle1/cmd_vel
    ```
    یہ دکھائے گا کہ `/turtle1/cmd_vel` کے لیے پیغام کی قسم `geometry_msgs/msg/Twist` ہے، جس میں لکیری اور زاویائی ویلوسیٹی کے فیلڈز شامل ہیں۔

4.  **ٹاپک ڈیٹا کی گونج (Echoing Topic Data):**
    کسی ٹاپک پر حقیقی وقت میں پبلش ہونے والے پیغامات کو دیکھنے کے لیے، `echo` کمانڈ کا استعمال کریں:
    ```bash
    ros2 topic echo /turtle1/cmd_vel
    ```
    جیسا کہ آپ `turtle_teleop_key` ٹرمینل میں تیر والے بٹن استعمال کریں گے، آپ کو `Twist` پیغامات پرنٹ ہوتے ہوئے نظر آئیں گے، جو لکیری اور زاویائی ویلوسیٹی کمانڈز دکھاتے ہیں۔

5.  **دستی طور پر ٹاپک پر پبلش کرنا:**
    آپ کمانڈ لائن سے بھی دستی طور پر ایک ٹاپک پر پیغام پبلش کر سکتے ہیں:
    ```bash
    ros2 topic pub --once /turtle1/cmd_vel geometry_msgs/msg/Twist "{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: 1.8}}"
    ```
    یہ کمانڈ `/turtle1/cmd_vel` پر ایک واحد `Twist` پیغام بھیجتی ہے، جس سے کچھوا 2.0 کی لکیری ویلوسیٹی کے ساتھ آگے بڑھتا ہے اور 1.8 کی زاویائی ویلوسیٹی کے ساتھ مڑتا ہے۔ اس صورت حال میں، `turtle_teleop_key` `/turtle1/cmd_vel` کے پبلشر کے طور پر کام کرتا ہے، اور `turtlesim_node` ایک سبسکرائبر کے طور پر کام کرتا ہے۔

### Messages

In ROS 2, **Messages** are the fundamental data structures used for exchanging information between nodes. They are essentially structured data types that encapsulate the data being transmitted over topics, services, and actions. Messages allow nodes to communicate effectively by providing a common understanding of the data format.

### پیغامات

ROS 2 میں، **پیغامات (Messages)** نوڈز کے درمیان معلومات کے تبادلے کے لیے استعمال ہونے والے بنیادی ڈیٹا ڈھانچے ہیں۔ وہ بنیادی طور پر منظم ڈیٹا کی اقسام ہیں جو ٹاپکس، سروسز اور ایکشنز پر منتقل ہونے والے ڈیٹا کو سمیٹتی ہیں۔ پیغامات نوڈز کو ڈیٹا فارمیٹ کی مشترکہ سمجھ فراہم کرکے مؤثر طریقے سے بات چیت کرنے کی اجازت دیتے ہیں۔

#### Message Definition

Messages are defined using a simplified Interface Definition Language (IDL) in `.msg` files. These files are typically located in a `msg/` directory within a ROS 2 package. A `.msg` file specifies the structure of the data that will be transmitted, consisting of:

*   **Fields:** Each field in a message has a type and a name.
    *   **Field Types:** Can be:
        *   **Built-in types:** Primitive data types like `int8`, `uint8`, `int16`, `uint16`, `int32`, `uint32`, `int64`, `uint64`, `float32`, `float64`, `string`, `bool`, `byte`, `duration`, `time`.
        *   **Arrays:** Fixed-size (e.g., `float32[4]`) or variable-size (e.g., `string[]`) arrays of built-in types or other message types. ROS 2 also supports bounded arrays (e.g., `int32[<=5]`) and bounded strings (e.g., `string<=10`).
        *   **Other message types:** You can embed messages from other ROS 2 packages or even other custom messages within your message definition (e.g., `geometry_msgs/Point position`).
    *   **Field Names:** Must be lowercase alphanumeric characters, using underscores to separate words (e.g., `linear_velocity`).
*   **Constants:** Messages can also include constants, which are fixed values associated with the message type (e.g., `int32 MAX_SPEED=10`).

#### پیغام کی تعریف

پیغامات کو ایک سادہ شدہ انٹرفیس ڈیفینیشن لینگویج (IDL) کا استعمال کرتے ہوئے `.msg` فائلوں میں بیان کیا جاتا ہے۔ یہ فائلیں عام طور پر ROS 2 پیکیج کے اندر ایک `msg/` ڈائریکٹری میں واقع ہوتی ہیں۔ ایک `.msg` فائل منتقل ہونے والے ڈیٹا کے ڈھانچے کی وضاحت کرتی ہے، جو مندرجہ ذیل پر مشتمل ہوتا ہے:

*   **فیلڈز (Fields):** پیغام میں ہر فیلڈ کی ایک قسم اور ایک نام ہوتا ہے۔
    *   **فیلڈ کی اقسام (Field Types):** ہو سکتی ہیں:
        *   **بلٹ ان اقسام (Built-in types):** پرائمیٹیو ڈیٹا کی اقسام جیسے `int8`، `uint8`، `int16`، `uint16`، `int32`، `uint32`، `int64`، `uint64`، `float32`، `float64`، `string`، `bool`، `byte`، `duration`، `time`۔
        *   **صفات (Arrays):** بلٹ ان اقسام یا دیگر پیغام کی اقسام کی مقررہ سائز (مثلاً، `float32[4]`) یا متغیر سائز (مثلاً، `string[]`) صفات۔ ROS 2 باؤنڈڈ صفات (مثلاً، `int32[<=5]`) اور باؤنڈڈ سٹرنگز (مثلاً، `string<=10`) کو بھی سپورٹ کرتا ہے۔
        *   **دیگر پیغام کی اقسام (Other message types):** آپ اپنے پیغام کی تعریف کے اندر دیگر ROS 2 پیکیجز یا یہاں تک کہ دیگر کسٹم پیغامات سے پیغامات کو شامل کر سکتے ہیں (مثلاً، `geometry_msgs/Point position`)۔
    *   **فیلڈ کے نام (Field Names):** چھوٹے حروف تہجی اور ہندسوں پر مشتمل ہونے چاہئیں، الفاظ کو الگ کرنے کے لیے انڈرسکور کا استعمال کرتے ہوئے (مثلاً، `linear_velocity`)۔
*   **ثابتات (Constants):** پیغامات میں ثابتات بھی شامل ہو سکتے ہیں، جو پیغام کی قسم سے منسلک مقررہ اقدار ہیں (مثلاً، `int32 MAX_SPEED=10`)۔

#### Example of a `.msg` file (`TwoInts.msg`)

```
int64 a
int64 b
---
int64 sum
```
*Note: The `---` separates the request fields from the response fields in service definitions, but in simple message definitions, it's generally not used unless the message is intended for a service.*

#### ایک `.msg` فائل کی مثال (`TwoInts.msg`)

```
int64 a
int64 b
---
int64 sum
```
*نوٹ: `---` سروس کی تعریفوں میں درخواست کے فیلڈز کو جواب کے فیلڈز سے الگ کرتا ہے، لیکن سادہ پیغام کی تعریفوں میں، یہ عام طور پر استعمال نہیں ہوتا جب تک کہ پیغام کسی سروس کے لیے نہ ہو۔*

#### Why Custom Messages?

While ROS 2 provides a rich set of standard message types (e.g., `std_msgs` for common data types, `geometry_msgs` for geometric primitives, `sensor_msgs` for sensor data), you will often need to define **custom messages** when the existing types do not perfectly fit your specific data requirements. Custom messages allow you to tailor the data structure precisely to the information you need to exchange, leading to more efficient and readable code.

#### کسٹم پیغامات کیوں؟

اگرچہ ROS 2 معیاری پیغام کی اقسام کا ایک بھرپور سیٹ فراہم کرتا ہے (مثلاً، عام ڈیٹا کی اقسام کے لیے `std_msgs`، جیومیٹرک پرائمیٹیوز کے لیے `geometry_msgs`، سینسر ڈیٹا کے لیے `sensor_msgs`)، آپ کو اکثر **کسٹم پیغامات (custom messages)** کی تعریف کرنے کی ضرورت ہوگی جب موجودہ اقسام آپ کی مخصوص ڈیٹا کی ضروریات کے مطابق نہ ہوں۔ کسٹم پیغامات آپ کو ڈیٹا کے ڈھانچے کو اس معلومات کے مطابق درست طریقے سے ترتیب دینے کی اجازت دیتے ہیں جس کا آپ تبادلہ کرنا چاہتے ہیں، جس سے زیادہ موثر اور پڑھنے کے قابل کوڈ بنتا ہے۔

#### Creating Custom ROS 2 Messages (General Steps)

1.  **Create a ROS 2 Package:** Custom messages reside within a ROS 2 package, typically created as an `ament_cmake` type package.
2.  **Define the `.msg` File:** Create a `msg/` directory within your package and place your `.msg` files inside it.
3.  **Configure `CMakeLists.txt`:** Modify your package's `CMakeLists.txt` file to instruct the ROS 2 build system to generate code for your custom messages. This involves using `find_package` for `rosidl_default_generators` and `ament_cmake_ros`, and then `rosidl_generate_interfaces`.
4.  **Configure `package.xml`:** Add necessary dependencies for message generation (e.g., `<build_depend>rosidl_default_generators</build_depend>`, `<exec_depend>rosidl_default_runtime</exec_depend>`) to your `package.xml`.
5.  **Build the Package:** Build your workspace using `colcon build --packages-select your_package_name`. This process generates source code (in C++, Python, etc.) for your custom message types.
6.  **Verify and Use:** After building, you can verify your custom message definition using `ros2 msg show your_package_name/msg/YourMessageName`. You can then import and use these messages in your C++ or Python nodes.

#### کسٹم ROS 2 پیغامات بنانا (عمومی اقدامات)

1.  **ایک ROS 2 پیکیج بنائیں (Create a ROS 2 Package):** کسٹم پیغامات ایک ROS 2 پیکیج کے اندر ہوتے ہیں، جو عام طور پر `ament_cmake` قسم کے پیکیج کے طور پر بنایا جاتا ہے۔
2.  **`.msg` فائل کی تعریف کریں (Define the `.msg` File):** اپنے پیکیج کے اندر ایک `msg/` ڈائریکٹری بنائیں اور اپنی `.msg` فائلیں اس کے اندر رکھیں۔
3.  **`CMakeLists.txt` کو ترتیب دیں (Configure `CMakeLists.txt`):** اپنے پیکیج کی `CMakeLists.txt` فائل کو تبدیل کریں تاکہ ROS 2 بلڈ سسٹم کو آپ کے کسٹم پیغامات کے لیے کوڈ تیار کرنے کی ہدایت کرے۔ اس میں `rosidl_default_generators` اور `ament_cmake_ros` کے لیے `find_package` کا استعمال، اور پھر `rosidl_generate_interfaces` شامل ہے۔
4.  **`package.xml` کو ترتیب دیں (Configure `package.xml`):** اپنے `package.xml` میں پیغام کی تیاری کے لیے ضروری انحصار شامل کریں (مثلاً، `<build_depend>rosidl_default_generators</build_depend>`، `<exec_depend>rosidl_default_runtime</exec_depend>`)۔
5.  **پیکیج بنائیں (Build the Package):** `colcon build --packages-select your_package_name` کا استعمال کرتے ہوئے اپنا ورک اسپیس بنائیں۔ یہ عمل آپ کے کسٹم پیغام کی اقسام کے لیے سورس کوڈ (C++، پائتھن وغیرہ میں) تیار کرتا ہے۔
6.  **تصدیق کریں اور استعمال کریں (Verify and Use):** بنانے کے بعد، آپ `ros2 msg show your_package_name/msg/YourMessageName` کا استعمال کرتے ہوئے اپنے کسٹم پیغام کی تعریف کی تصدیق کر سکتے ہیں۔ پھر آپ ان پیغامات کو اپنے C++ یا پائتھن نوڈز میں درآمد اور استعمال کر سکتے ہیں۔

### Services (سروسز)

**Services** in ROS 2 provide a synchronous request-response communication mechanism between nodes. Unlike topics, which are designed for continuous, one-way data streams, services are used for on-demand, one-time interactions where a client node sends a request and expects an immediate response from a server node. This makes them ideal for specific queries or actions that require a direct result.

**Request-Response Communication Model:**

*   **Service Server (سروس سرور):** A node that offers a particular service. It "advertises" its service with a unique name, making it discoverable by other nodes. When a server receives a request, it performs the requested operation and sends back a response.
*   **Service Client (سروس کلائنٹ):** A node that needs a specific task performed or information retrieved. It "calls" a service on a server by sending a request message and then waits for the server's response.

**Key Characteristics of Services:**

*   **Synchronous Interaction:** Typically, the client waits for the server's response before proceeding. While asynchronous calls are possible (returning a `future` object), the fundamental nature is still a one-time, paired request and response.

**سروسز کی اہم خصوصیات:**

*   **ہم وقت ساز تعامل (Synchronous Interaction):** عام طور پر، کلائنٹ آگے بڑھنے سے پہلے سرور کے جواب کا انتظار کرتا ہے۔ اگرچہ غیر ہم وقت ساز کالز ممکن ہیں (ایک `future` آبجیکٹ واپس کرنا)، بنیادی نوعیت اب بھی ایک وقتی، جوڑ والی درخواست اور جواب ہے۔

*   **One-to-One Communication:** Generally, a single client communicates with a single service server for a given request.

*   **ایک سے ایک مواصلات (One-to-One Communication):** عام طور پر، ایک ہی کلائنٹ ایک دی گئی درخواست کے لیے ایک ہی سروس سرور کے ساتھ بات چیت کرتا ہے۔

*   **Bi-directional Data Flow:** Data flows in both directions: a request message from the client to the server, and a response message from the server back to the client.

*   **دو طرفہ ڈیٹا فلو (Bi-directional Data Flow):** ڈیٹا دونوں سمتوں میں بہتا ہے: کلائنٹ سے سرور تک درخواست کا پیغام، اور سرور سے سرور سے کلائنٹ تک جواب کا پیغام۔

*   **Specific Task Execution:** Services are best suited for tasks that have a clear start and end, and where the result is needed immediately (e.g., getting the current robot pose, changing a parameter, or performing a single calculation).

*   **مخصوص ٹاسک کی تکمیل (Specific Task Execution):** سروسز ایسے کاموں کے لیے بہترین موزوں ہیں جن کا ایک واضح آغاز اور اختتام ہوتا ہے، اور جہاں نتیجہ فوری طور پر درکار ہوتا ہے (مثلاً، روبوٹ کی موجودہ پوز حاصل کرنا، ایک پیرامیٹر تبدیل کرنا، یا ایک واحد حساب کتاب انجام دینا)۔

*   **Definition in `.srv` files:** The structure of both the request and response messages for a service is defined in a `.srv` file.

*   **`.srv` فائلوں میں تعریف (Definition in `.srv` files):** ایک سروس کے لیے درخواست اور جواب کے پیغامات کا ڈھانچہ ایک `.srv` فائل میں بیان کیا جاتا ہے۔

**Service Definition (`.srv` file):**

A service definition file (`.srv`) specifies the data types and names for both the request and response messages. It uses three hyphens (`---`) to separate the request fields from the response fields.

**Example of a `.srv` file (`AddTwoInts.srv`):**

```
int64 a
int64 b
---
int64 sum
```
In this example:
*   The **request** consists of two 64-bit integer fields: `a` and `b`.
*   The **response** consists of a single 64-bit integer field: `sum`.

**When to Use Services (and when not to):**

*   **Use Services when:** You need an immediate, one-time result from a specific query or action. The task is typically quick to execute and doesn't require continuous feedback or preemption.

*   **سروسز کب استعمال کریں:** جب آپ کو کسی مخصوص سوال یا عمل سے فوری، ایک وقتی نتیجہ درکار ہو۔ کام عام طور پر تیزی سے انجام پاتا ہے اور اسے مسلسل فیڈ بیک یا پریمپشن کی ضرورت نہیں ہوتی۔

*   **Avoid Services for:** Long-running tasks, tasks that require continuous feedback on their progress, or tasks that might need to be canceled mid-execution. For such scenarios, **ROS 2 Actions** are a more appropriate communication mechanism.

*   **سروسز سے کب گریز کریں:** طویل عرصے تک چلنے والے کاموں، ایسے کاموں کے لیے جنہیں اپنی پیشرفت پر مسلسل فیڈ بیک کی ضرورت ہوتی ہے، یا ایسے کاموں کے لیے جنہیں درمیان میں ہی منسوخ کرنے کی ضرورت پڑ سکتی ہے۔ ایسے حالات کے لیے، **ROS 2 ایکشنز** مواصلات کا زیادہ مناسب طریقہ کار ہیں۔

**Creating Custom ROS 2 Services (General Steps):**

Similar to custom messages, custom services are defined within a ROS 2 package and require specific configurations:

1.  **Create/Select a ROS 2 Package:** Services are defined within a ROS 2 package (e.g., an `ament_cmake` package).

1.  **ایک ROS 2 پیکج بنائیں/منتخب کریں (Create/Select a ROS 2 Package):** سروسز ایک ROS 2 پیکیج کے اندر بیان کی جاتی ہیں (مثلاً، ایک `ament_cmake` پیکیج)۔

2.  **Define the `.srv` File:** Create a `srv/` directory within your package and place your `.srv` files (like `AddTwoInts.srv`) inside it.

2.  **`.srv` فائل کی تعریف کریں (Define the `.srv` File):** اپنے پیکیج کے اندر ایک `srv/` ڈائریکٹری بنائیں اور اپنی `.srv` فائلیں (جیسے `AddTwoInts.srv`) اس کے اندر رکھیں۔

3.  **Configure `CMakeLists.txt`:** Modify your `CMakeLists.txt` to include `find_package` for `rosidl_default_generators` and `ament_cmake_ros`, and use `rosidl_generate_interfaces` to process your service definition.

3.  **`CMakeLists.txt` کو ترتیب دیں (Configure `CMakeLists.txt`):** اپنے `CMakeLists.txt` کو تبدیل کریں تاکہ `rosidl_default_generators` اور `ament_cmake_ros` کے لیے `find_package` شامل ہو، اور اپنی سروس کی تعریف پر کارروائی کرنے کے لیے `rosidl_generate_interfaces` استعمال کریں۔

4.  **Configure `package.xml`:** Add necessary build and execution dependencies related to service generation (e.g., `rosidl_default_generators`, `builtin_interfaces`) to your `package.xml`.

4.  **`package.xml` کو ترتیب دیں (Configure `package.xml`):** اپنے `package.xml` میں سروس کی تیاری سے متعلق ضروری بلڈ اور ایگزیکیوشن ڈیپینڈنسیز (مثلاً، `rosidl_default_generators`, `builtin_interfaces`) شامل کریں۔

5.  **Build the Package:** Build your workspace using `colcon build --packages-select your_package_name`. This step generates the language-specific source files (headers, classes) for your custom service.

5.  **پیکیج بنائیں (Build the Package):** `colcon build --packages-select your_package_name` کا استعمال کرتے ہوئے اپنا ورک اسپیس بنائیں۔ یہ مرحلہ آپ کی کسٹم سروس کے لیے زبان کے لحاظ سے مخصوص سورس فائلیں (ہیڈرز، کلاسز) تیار کرتا ہے۔

6.  **Implement Server and Client Nodes:** Write your ROS 2 nodes (in C++ or Python) to act as service servers (providing the service) and service clients (calling the service), using the auto-generated service types.

6.  **سرور اور کلائنٹ نوڈز کو نافذ کریں (Implement Server and Client Nodes):** پھر آپ اپنے ROS 2 نوڈز (C++ یا پائتھن میں) کو سروس سرورز (سروس فراہم کرنا) اور سروس کلائنٹس (سروس کو کال کرنا) کے طور پر کام کرنے کے لیے لکھ سکتے ہیں، خودکار طور پر تیار کردہ سروس کی اقسام کا استعمال کرتے ہوئے۔



### Actions (ایکشنز)

**Actions** in ROS 2 are a communication mechanism designed for long-running, goal-oriented tasks. They provide a more robust and feature-rich way to handle complex operations compared to topics (one-way streaming) or services (single request-response). Actions allow a client to send a goal, receive continuous feedback on the task's progress, and eventually get a final result, all while retaining the ability to preempt (cancel) the task if needed. This makes them perfectly suited for scenarios like robot navigation, manipulating objects, or any task that involves a sequence of operations over an extended period.

**Goal, Feedback, and Result Communication Model:**

The action communication model involves three distinct parts:

1.  **Goal:** The action client sends a "goal" to the action server. This goal describes the desired outcome or task to be performed (e.g., "navigate to coordinates X, Y" or "pick up the red cube"). The server then processes this goal and typically responds with an acceptance or rejection.

1.  **مقصد:** ایکشن کلائنٹ ایک "مقصد" ایکشن سرور کو بھیجتا ہے۔ یہ مقصد مطلوبہ نتیجہ یا انجام دیے جانے والے کام کو بیان کرتا ہے (مثلاً، "کوآرڈینیٹس X، Y پر نیویگیٹ کریں" یا "سرخ کیوب اٹھائیں")۔ سرور پھر اس مقصد پر کارروائی کرتا ہے اور عام طور پر قبولیت یا رد عمل کے ساتھ جواب دیتا ہے۔

2.  **Feedback:** Once the server accepts and begins executing the goal, it periodically sends "feedback" messages back to the client. This feedback provides real-time updates on the task's progress (e.g., "robot at 50% distance to target," "current joint angles"). This allows the client to monitor the ongoing operation and react if necessary.

2.  **فیڈ بیک:** ایک بار جب سرور مقصد کو قبول کر لیتا ہے اور اسے انجام دینا شروع کر دیتا ہے، تو وہ وقتاً فوقتاً "فیڈ بیک" پیغامات کلائنٹ کو واپس بھیجتا ہے۔ یہ فیڈ بیک کام کی پیشرفت کے بارے میں حقیقی وقت کی اپ ڈیٹس فراہم کرتا ہے (مثلاً، "روبوٹ ہدف سے 50٪ فاصلے پر ہے،" "موجودہ جوائنٹ زاویے")۔ یہ کلائنٹ کو جاری آپریشن کی نگرانی کرنے اور ضرورت پڑنے پر رد عمل ظاہر کرنے کی اجازت دیتا ہے۔

3.  **Result:** When the action server completes the goal (either successfully, with failure, or due to preemption), it sends a "result" back to the client. The result contains the final outcome of the task and any relevant data (e.g., "navigation successful," "object picked up," "task failed due to obstacle").

3.  **نتیجہ:** جب ایکشن سرور مقصد کو مکمل کر لیتا ہے (یا تو کامیابی سے، ناکامی کے ساتھ، یا پریمپشن کی وجہ سے)، تو وہ کلائنٹ کو ایک "نتیجہ" واپس بھیجتا ہے۔ نتیجہ کام کے حتمی نتیجے اور کسی بھی متعلقہ ڈیٹا کو سمیٹتا ہے (مثلاً، "نیویگیشن کامیاب،" "آبجیکٹ اٹھایا گیا،" "رکاوٹ کی وجہ سے کام ناکام")۔

This sophisticated communication pattern offers a transparent and controllable way to manage complex robotic behaviors.

**Key Characteristics of Actions:**

*   **Long-running Tasks:** Ideal for operations that take a significant amount of time to complete.

*   **طویل عرصے تک چلنے والے کام (Long-running Tasks):** ایسے آپریشنز کے لیے مثالی ہیں جن کو مکمل ہونے میں کافی وقت لگتا ہے۔

*   **Asynchronous & Goal-oriented:** Clients send a goal and don't block waiting for the result immediately; they receive feedback asynchronously.

*   **غیر ہم وقت ساز اور مقصد پر مبنی (Asynchronous & Goal-oriented):** کلائنٹ ایک مقصد بھیجتا ہے اور فوری طور پر نتیجہ کا انتظار نہیں کرتا؛ وہ غیر ہم وقت ساز طریقے سے فیڈ بیک حاصل کرتے ہیں۔

*   **Preemption Capability:** Clients can request to cancel an ongoing goal, allowing for dynamic control over the robot's actions.

*   **پریمپشن کی صلاحیت (Preemption Capability):** کلائنٹ جاری مقصد کو منسوخ کرنے کی درخواست کر سکتے ہیں، جو روبوٹ کے اعمال پر متحرک کنٹرول کی اجازت دیتا ہے۔

*   **Continuous Feedback:** Provides rich information about the task's progress, which is crucial for monitoring and decision-making.

*   **مسلسل فیڈ بیک (Continuous Feedback):** کام کی پیشرفت کے بارے میں بھرپور معلومات فراہم کرتا ہے، جو نگرانی اور فیصلہ سازی کے لیے بہت اہم ہے۔

*   **Definition in `.action` files:** The structure of the goal, result, and feedback messages for an action is defined in a single `.action` file.

*   **`.action` فائلوں میں تعریف (Definition in `.action` files):** ایک ایکشن کے لیے مقصد، نتیجہ، اور فیڈ بیک پیغامات کی ساخت ایک واحد `.action` فائل میں بیان کی جاتی ہے۔

**Action Definition (`.action` file):**

An action definition file (`.action`) is similar to `.msg` and `.srv` files but specifies three separate message structures for the goal, result, and feedback, each separated by three hyphens (`---`).

**Example of an `.action` file (`Fibonacci.action`):**

```
# Goal
int32 order
---
# Result
int32[] sequence
---
# Feedback
int32[] partial_sequence
```
In this example:
*   The **Goal** requires an `int32` named `order`.
*   The **Result** returns an array of `int32` named `sequence`.
*   The **Feedback** provides an array of `int32` named `partial_sequence` during execution.

**Creating Custom ROS 2 Actions (General Steps):**

To implement custom actions, you follow a process similar to messages and services:

1.  **Create/Select a ROS 2 Package:** Custom actions are typically defined within an `ament_cmake` ROS 2 package. It's good practice to have a dedicated package for interface definitions (messages, services, actions).

1.  **ایک ROS 2 پیکج بنائیں/منتخب کریں (Create/Select a ROS 2 Package):** کسٹم ایکشنز عام طور پر ایک `ament_cmake` ROS 2 پیکج کے اندر بیان کیے جاتے ہیں۔ انٹرفیس کی تعریفوں (پیغامات، سروسز، ایکشنز) کے لیے ایک مخصوص پیکج رکھنا ایک اچھا عمل ہے۔

2.  **Define the `.action` File:** Create an `action/` directory inside your package and place your `.action` files (e.g., `Fibonacci.action`) within it.

2.  **`.action` فائل کی تعریف کریں (Define the `.action` File):** اپنے پیکج کے اندر ایک `action/` ڈائریکٹری بنائیں اور اپنی `.action` فائلیں (جیسے `Fibonacci.action`) اس کے اندر رکھیں۔

3.  **Configure `CMakeLists.txt`:** Modify your package's `CMakeLists.txt` to properly configure the build system. This includes finding packages like `rosidl_default_generators` and `ament_cmake_ros`, and then using `rosidl_generate_interfaces` to process your action definition. Ensure `action_msgs` is also a dependency.

3.  **`CMakeLists.txt` کو ترتیب دیں (Configure `CMakeLists.txt`):** اپنے پیکج کی `CMakeLists.txt` کو صحیح طریقے سے بلڈ سسٹم کو ترتیب دینے کے لیے ترمیم کریں۔ اس میں `rosidl_default_generators` اور `ament_cmake_ros` جیسے پیکجز کو تلاش کرنا، اور پھر آپ کے ایکشن کی تعریف کو پروسیس کرنے کے لیے `rosidl_generate_interfaces` کا استعمال شامل ہے۔ یقینی بنائیں کہ `action_msgs` بھی ایک انحصار ہے۔

4.  **Configure `package.xml`:** Add necessary build and execution dependencies (e.g., `action_msgs`, `rosidl_default_generators`, `builtin_interfaces`) to your `package.xml`.

4.  **`package.xml` کو ترتیب دیں (Configure `package.xml`):** اپنے `package.xml` میں ایکشن کی تیاری سے متعلق ضروری بلڈ اور ایگزیکیوشن ڈیپینڈنسیز (مثلاً، `action_msgs`, `rosidl_default_generators`, `builtin_interfaces`) شامل کریں۔

5.  **Build the Package:** Compile your workspace using `colcon build --packages-select your_package_name`. This generates the necessary language-specific code (e.g., C++ headers, Python classes) for your custom action.

5.  **پیکیج بنائیں (Build the Package):** `colcon build --packages-select your_package_name` کا استعمال کرتے ہوئے اپنا ورک اسپیس بنائیں۔ یہ آپ کے کسٹم ایکشن کے لیے ضروری زبان کے لحاظ سے مخصوص کوڈ (مثلاً، C++ ہیڈرز، پائتھن کلاسز) تیار کرتا ہے۔

6.  **Implement Action Server and Client Nodes:** With the generated action types, you can then write your ROS 2 nodes to act as an Action Server (processing goals, sending feedback, and returning results) and an Action Client (sending goals, receiving feedback, and processing results).

6.  **ایکشن سرور اور کلائنٹ نوڈز کو نافذ کریں (Implement Action Server and Client Nodes):** تیار کردہ ایکشن کی اقسام کے ساتھ، آپ پھر اپنے ROS 2 نوڈز کو ایک ایکشن سرور (مقاصد پر کارروائی کرنا، فیڈ بیک بھیجنا، اور نتائج واپس کرنا) اور ایک ایکشن کلائنٹ (مقاصد بھیجنا، فیڈ بیک وصول کرنا، اور نتائج پر کارروائی کرنا) کے طور پر کام کرنے کے لیے لکھ سکتے ہیں۔
