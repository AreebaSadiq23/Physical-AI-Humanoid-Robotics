---
title: "Module 1: ROS 2 Fundamentals"
---

# Module 1: ROS 2 Fundamentals

## Chapter 1: Introduction to ROS 2

### What is ROS 2?

The Robot Operating System (ROS) is a set of software libraries and tools that help you build robot applications. It is not an operating system in the traditional sense, like Windows, macOS, or Linux. Instead, it is a flexible framework for writing robot software. ROS provides standard services that you would expect from an operating system, including hardware abstraction, low-level device control, implementation of commonly-used functionality, message-passing between processes, and package management.

روبوٹ آپریٹنگ سسٹم (ROS) سافٹ ویئر لائبریریوں اور ٹولز کا ایک مجموعہ ہے جو آپ کو روبوٹ ایپلی کیشنز بنانے میں مدد کرتا ہے۔ یہ روایتی معنوں میں آپریٹنگ سسٹم نہیں ہے، جیسے ونڈوز، میک او ایس، یا لینکس۔ اس کے بجائے، یہ روبوٹ سافٹ ویئر لکھنے کے لیے ایک لچکدار فریم ورک ہے۔ ROS معیاری خدمات فراہم کرتا ہے جن کی آپ آپریٹنگ سسٹم سے توقع کریں گے، بشمول ہارڈویئر ایبسٹریکشن، نچلی سطح کے ڈیوائس کنٹرول، عام طور پر استعمال ہونے والی فعالیت کا نفاذ، پروسیسز کے درمیان میسج پاسنگ، اور پیکیج مینجمنٹ۔

ROS 2 is the second generation of ROS, and it is a complete redesign of the original ROS framework. It is built on top of the Data Distribution Service (DDS) standard, which is an industry-standard for real-time systems. This makes ROS 2 more suitable for real-time and embedded systems, as well as for multi-robot systems.

ROS 2, ROS کی دوسری نسل ہے، اور یہ اصل ROS فریم ورک کا مکمل ری ڈیزائن ہے۔ یہ ڈیٹا ڈسٹری بیوشن سروس (DDS) معیار کے اوپر بنایا گیا ہے، جو ریئل ٹائم سسٹمز کے لیے ایک صنعتی معیار ہے۔ یہ ROS 2 کو ریئل ٹائم اور ایمبیڈڈ سسٹمز کے ساتھ ساتھ ملٹی روبوٹ سسٹمز کے لیے زیادہ موزوں بناتا ہے۔

روبوٹ آپریٹنگ سسٹم (ROS) سافٹ ویئر لائبریریوں اور ٹولز کا ایک مجموعہ ہے جو آپ کو روبوٹ ایپلی کیشنز بنانے میں مدد کرتا ہے۔ یہ روایتی معنوں میں آپریٹنگ سسٹم نہیں ہے، جیسے ونڈوز، میک او ایس، یا لینکس۔ اس کے بجائے، یہ روبوٹ سافٹ ویئر لکھنے کے لیے ایک لچکدار فریم ورک ہے۔ ROS معیاری خدمات فراہم کرتا ہے جن کی آپ آپریٹنگ سسٹم سے توقع کریں گے، بشمول ہارڈویئر ایبسٹریکشن، نچلی سطح کے ڈیوائس کنٹرول، عام طور پر استعمال ہونے والی فعالیت کا نفاذ، پروسیسز کے درمیان میسج پاسنگ، اور پیکیج مینجمنٹ۔

ROS 2, ROS کی دوسری نسل ہے، اور یہ اصل ROS فریم ورک کا مکمل ری ڈیزائن ہے۔ یہ ڈیٹا ڈسٹری بیوشن سروس (DDS) معیار کے اوپر بنایا گیا ہے، جو ریئل ٹائم سسٹمز کے لیے ایک صنعتی معیار ہے۔ یہ ROS 2 کو ریئل ٹائم اور ایمبیڈڈ سسٹمز کے ساتھ ساتھ ملٹی روبوٹ سسٹمز کے لیے زیادہ موزوں بناتا ہے۔

---

### Key Concepts

ROS 2 has a few key concepts that you need to understand to get started. These are:

*   **Nodes:** A node is a process that performs computation. A ROS 2 system is comprised of many nodes.

*   **نوڈز (Nodes):** ایک نوڈ ایک ایسا عمل ہے جو کمپیوٹیشن انجام دیتا ہے۔ ایک ROS 2 سسٹم بہت سے نوڈز پر مشتمل ہوتا ہے۔
*   **Topics:** Topics are used for continuous data streams. Nodes can publish data to a topic, and other nodes can subscribe to that topic to receive the data.

*   **عنوانات (Topics):** عنوانات مسلسل ڈیٹا اسٹریمز کے لیے استعمال ہوتے ہیں۔ نوڈز کسی عنوان پر ڈیٹا شائع کرسکتے ہیں، اور دوسرے نوڈز ڈیٹا حاصل کرنے کے لیے اس عنوان کو سبسکرائب کرسکتے ہیں۔
*   **Services:** Services are used for request/response interactions. A node can offer a service, and another node can make a request and wait for a response.

*   **خدمات (Services):** خدمات درخواست/جواب کے تعاملات کے لیے استعمال ہوتی ہیں۔ ایک نوڈ سروس پیش کرسکتا ہے، اور دوسرا نوڈ درخواست کرسکتا ہے اور جواب کا انتظار کرسکتا ہے۔
*   **Actions:** Actions are used for long-running tasks. A node can start an action and get feedback on its progress.

*   **اعمال (Actions):** اعمال طویل عرصے تک چلنے والے کاموں کے لیے استعمال ہوتے ہیں۔ ایک نوڈ ایک عمل شروع کرسکتا ہے اور اس کی پیشرفت پر رائے حاصل کرسکتا ہے۔

---

### ROS 2 Architecture

ROS 2 has a distributed architecture that is designed to be flexible, reliable, and scalable. It consists of several layers:

### ROS 2 کا فن تعمیر

ROS 2 کا ایک تقسیم شدہ فن تعمیر ہے جو لچکدار، قابل اعتماد، اور قابل توسیع ہونے کے لیے ڈیزائن کیا گیا ہے۔ یہ کئی تہوں پر مشتمل ہے:

*   **Hardware Layer:** This is the physical hardware of the robot, including sensors, actuators, and computers.

*   **ہارڈ ویئر کی تہہ (Hardware Layer):** یہ روبوٹ کا طبعی ہارڈویئر ہے، جس میں سینسر، ایکچویٹرز، اور کمپیوٹر شامل ہیں۔
*   **Driver Layer:** This layer consists of the software drivers that allow the ROS 2 system to communicate with the hardware.

*   **ڈرائیور کی تہہ (Driver Layer):** یہ تہہ سافٹ ویئر ڈرائیورز پر مشتمل ہے جو ROS 2 سسٹم کو ہارڈویئر کے ساتھ بات چیت کرنے کی اجازت دیتی ہے۔
*   **ROS Middleware Interface (RMW):** This is a key change in ROS 2. It is an abstraction layer that allows ROS 2 to use different middleware implementations. The default middleware is DDS (Data Distribution Service).

*   **ROS مڈل ویئر انٹرفیس (RMW):** یہ ROS 2 میں ایک اہم تبدیلی ہے۔ یہ ایک تجریدی تہہ ہے جو ROS 2 کو مختلف مڈل ویئر نفاذات استعمال کرنے کی اجازت دیتی ہے۔ پہلے سے طے شدہ مڈل ویئر DDS (ڈیٹا ڈسٹری بیوشن سروس) ہے۔
*   **ROS Client Library (RCL):** This layer provides the APIs that developers use to write ROS 2 applications. There are client libraries for C++ (`rclcpp`) and Python (`rclpy`).

*   **ROS کلائنٹ لائبریری (RCL):** یہ تہہ وہ APIs فراہم کرتی ہے جو ڈیولپرز ROS 2 ایپلی کیشنز لکھنے کے لیے استعمال کرتے ہیں۔ C++ (`rclcpp`) اور Python (`rclpy`) کے لیے کلائنٹ لائبریریاں ہیں۔
*   **Application Layer:** This is where you write your ROS 2 nodes that implement the robot's functionality.

*   **ایپلی کیشن کی تہہ (Application Layer):** یہ وہ جگہ ہے جہاں آپ اپنے ROS 2 نوڈز لکھتے ہیں جو روبوٹ کی فعالیت کو نافذ کرتے ہیں۔

---

### ROS 2 vs. ROS 1

ROS 2 is a significant improvement over ROS 1, with several key advantages:

### ROS 2 بمقابلہ ROS 1

ROS 2, ROS 1 کے مقابلے میں ایک اہم بہتری ہے، جس کے کئی اہم فوائد ہیں:

*   **No ROS Master:** ROS 2 eliminates the need for a central ROS Master, which was a single point of failure in ROS 1. This makes ROS 2 systems more robust and reliable.

*   **کوئی ROS ماسٹر نہیں:** ROS 2 مرکزی ROS ماسٹر کی ضرورت کو ختم کرتا ہے، جو ROS 1 میں ناکامی کا واحد نقطہ تھا۔ یہ ROS 2 سسٹمز کو زیادہ مضبوط اور قابل اعتماد بناتا ہے۔
*   **Improved Security:** ROS 2 has built-in security features, including authentication, encryption, and access control.

*   **بہتر سیکورٹی:** ROS 2 میں بلٹ ان سیکورٹی خصوصیات ہیں، بشمول تصدیق، خفیہ کاری، اور رسائی کنٹرول۔
*   **Real-time Support:** ROS 2 is designed for real-time applications, with support for real-time operating systems (RTOS).

*   **ریئل ٹائم سپورٹ:** ROS 2 ریئل ٹائم ایپلی کیشنز کے لیے ڈیزائن کیا گیا ہے، جس میں ریئل ٹائم آپریٹنگ سسٹمز (RTOS) کے لیے سپورٹ ہے۔
*   **Cross-platform:** ROS 2 supports Linux, macOS, and Windows, while ROS 1 was primarily focused on Linux.

*   **کراس پلیٹ فارم:** ROS 2 لینکس، میک او ایس، اور ونڈوز کو سپورٹ کرتا ہے، جبکہ ROS 1 بنیادی طور پر لینکس پر مرکوز تھا۔
*   **Python 3:** ROS 2 uses Python 3, while ROS 1 used Python 2.

*   **ازگر 3:** ROS 2 ازگر 3 کا استعمال کرتا ہے، جبکہ ROS 1 ازگر 2 کا استعمال کرتا تھا۔

---

## Chapter 2: Setting up a ROS 2 Workspace

### Installation of ROS 2

This guide covers the installation of ROS 2 Humble Hawksbill on Ubuntu 22.04.

### ROS 2 کی تنصیب

یہ گائیڈ Ubuntu 22.04 پر ROS 2 Humble Hawksbill کی تنصیب کا احاطہ کرتا ہے۔

**1. Set Locale**

Ensure your system supports UTF-8.

**1. لوکیل سیٹ کریں**

یقینی بنائیں کہ آپ کا سسٹم UTF-8 کو سپورٹ کرتا ہے۔

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
```

**2. Add ROS 2 Repository**

Add the ROS 2 GPG key and repository to your system.

**2. ROS 2 ریپوزٹری شامل کریں**

ROS 2 GPG کلید اور ریپوزٹری کو اپنے سسٹم میں شامل کریں۔

```bash
sudo apt install software-properties-common -y
sudo add-apt-repository universe -y
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

**3. Install ROS 2 Packages**

The `desktop` installation is recommended.

**3. ROS 2 پیکیجز انسٹال کریں**

`desktop` کی تنصیب کی سفارش کی جاتی ہے۔

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-humble-desktop -y
```

**4. Source the Setup File**

Source the setup script in each new terminal.

**4. سیٹ اپ فائل کو سورس کریں**

ہر نئے ٹرمینل میں سیٹ اپ اسکرپٹ کو سورس کریں۔

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

**5. Verify Installation**

Run the `talker-listener` example.

**5. تنصیب کی تصدیق کریں**

`talker-listener` مثال چلائیں۔

*   Terminal 1:
    ```bash
    ros2 run demo_nodes_cpp talker
    ```
*   Terminal 2:
    ```bash
    ros2 run demo_nodes_py listener
    ```

---

### Creating a ROS 2 Workspace

A ROS 2 workspace is a directory where you can create, build, and install your own ROS 2 packages.

### ROS 2 ورک اسپیس بنانا

ROS 2 ورک اسپیس ایک ڈائرکٹری ہے جہاں آپ اپنے ROS 2 پیکیجز بنا، بنا اور انسٹال کرسکتے ہیں۔

**1. Create a Workspace Directory**

Create a directory for your workspace and a `src` subdirectory.

**1. ورک اسپیس ڈائرکٹری بنائیں**

اپنی ورک اسپیس کے لیے ایک ڈائرکٹری اور ایک `src` سب ڈائرکٹری بنائیں۔

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
```

**2. Build the Workspace**

Build the workspace using `colcon`.

```bash
colcon build
```

**3. Source the Workspace**

Source the workspace's setup file to make the packages available.

```bash
source ~/ros2_ws/install/setup.bash
```

You can also add this command to your `~/.bashrc` file to source it automatically in new terminals.

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
```

---

### Creating a ROS 2 Package

You can create a new ROS 2 package using the `ros2 pkg create` command.

**1. Navigate to the `src` Directory**

Navigate to the `src` directory of your workspace.

```bash
cd ~/ros2_ws/src
```

**2. Create a Python Package**

To create a Python package, use the `--build-type ament_python` flag.

```bash
ros2 pkg create --build-type ament_python my_python_pkg --dependencies rclpy
```

**3. Create a C++ Package**

To create a C++ package, use the `--build-type ament_cmake` flag.

```bash
ros2 pkg create --build-type ament_cmake my_cpp_pkg --dependencies rclcpp
```

---
### ROS 2 پیکیج بنانا

آپ `ros2 pkg create` کمانڈ کا استعمال کرکے ایک نیا ROS 2 پیکیج بناسکتے ہیں۔

**1. `src` ڈائرکٹری پر جائیں**

اپنی ورک اسپیس کی `src` ڈائرکٹری پر جائیں۔

```bash
cd ~/ros2_ws/src
```

**2. ایک Python پیکیج بنائیں**

ایک Python پیکیج بنانے کے لیے، `--build-type ament_python` فلیگ کا استعمال کریں۔

```bash
ros2 pkg create --build-type ament_python my_python_pkg --dependencies rclpy
```

**3. ایک C++ پیکیج بنائیں**

ایک C++ پیکیج بنانے کے لیے، `--build-type ament_cmake` فلیگ کا استعمال کریں۔

```bash
ros2 pkg create --build-type ament_cmake my_cpp_pkg --dependencies rclcpp
```

---

### Building and Sourcing the Workspace

After creating a package, you need to build the workspace and source it to make the new package available.

**1. Navigate to the Workspace Root**

Navigate to the root of your workspace.

```bash
cd ~/ros2_ws
```

**2. Build the Workspace**

Build the workspace using `colcon`.

```bash
colcon build
```

**3. Source the Workspace**

Source the workspace's setup file.

```bash
source install/setup.bash
```


---

## Chapter 3: ROS 2 Nodes

### Creating a ROS 2 Node in Python

A ROS 2 node is a fundamental unit of execution in a ROS 2 system. Here's how to create a simple "Hello World" style publisher node in Python.

**1. Create a Python Package**

First, create a Python package as described in the previous chapter.

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_python py_pubsub --dependencies rclpy
```

**2. Create the Publisher Node**

Create a file named `publisher.py` in `~/ros2_ws/src/py_pubsub/py_pubsub/` with the following content:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class PublisherNode(Node):
    def __init__(self):
        super().__init__('publisher_node')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    publisher_node = PublisherNode()
    rclpy.spin(publisher_node)
    publisher_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**3. Modify `setup.py`**

Open `~/ros2_ws/src/py_pubsub/setup.py` and add the entry point for your node.

```python
entry_points={
    'console_scripts': [
        'talker = py_pubsub.publisher:main',
    ],
},
```

**4. Build and Run**

Build your workspace and run the node.

```bash
cd ~/ros2_ws
colcon build --packages-select py_pubsub
source install/setup.bash
ros2 run py_pubsub talker
```


---
### Creating a ROS 2 Node in C++

Here's how to create a simple publisher node in C++.

**1. Create a C++ Package**

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake cpp_pubsub --dependencies rclcpp std_msgs
```

**2. Create the Publisher Node**

Create a file named `publisher.cpp` in `~/ros2_ws/src/cpp_pubsub/src/` with the following content:

```cpp
#include <chrono>
#include <functional>
#include <memory>
#include <string>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

using namespace std::chrono_literals;

class PublisherNode : public rclcpp::Node
{
public:
  PublisherNode()
  : Node("publisher_node"), count_(0)
  {
    publisher_ = this->create_publisher<std_msgs::msg::String>("topic", 10);
    timer_ = this->create_wall_timer(
      500ms, std::bind(&PublisherNode::timer_callback, this));
  }

private:
  void timer_callback()
  {
    auto message = std_msgs::msg::String();
    message.data = "Hello, world! " + std::to_string(count_++);
    RCLCPP_INFO(this->get_logger(), "Publishing: '%s'", message.data.c_str());
    publisher_->publish(message);
  }
  rclcpp::TimerBase::SharedPtr timer_;
  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr publisher_;
  size_t count_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<PublisherNode>());
  rclcpp::shutdown();
  return 0;
}
```

**3. Modify `CMakeLists.txt`**

Open `~/ros2_ws/src/cpp_pubsub/CMakeLists.txt` and add the following lines to build the executable.

```cmake
add_executable(talker src/publisher.cpp)
ament_target_dependencies(talker rclcpp std_msgs)

install(TARGETS
  talker
  DESTINATION lib/${PROJECT_NAME}
)
```

**4. Build and Run**

Build your workspace and run the node.

```bash
cd ~/ros2_ws
colcon build --packages-select cpp_pubsub
source install/setup.bash
ros2 run cpp_pubsub talker
```


---
### Launching a Node

ROS 2 launch files allow you to start and configure multiple nodes at once. They are written in Python.

**1. Create a Launch Directory**

Create a `launch` directory in your package.

```bash
mkdir ~/ros2_ws/src/py_pubsub/launch
```

**2. Create a Launch File**

Create a file named `my_launch.py` in the `launch` directory with the following content:

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='py_pubsub',
            executable='talker',
            output='screen',
        ),
    ])
```

**3. Modify `setup.py`**

Add the launch file to your `setup.py` so it gets installed.

```python
import os
from glob import glob
from setuptools import setup

# ...

setup(
    # ...
    data_files=[
        # ...
        (os.path.join('share', package_name, 'launch'), glob('launch/*.py')),
    ],
    # ...
)
```

**4. Build and Launch**

Build your workspace and launch the file.

```bash
cd ~/ros2_ws
colcon build --packages-select py_pubsub
source install/setup.bash
ros2 launch py_pubsub my_launch.py
```


---

## Chapter 4: ROS 2 Topics

### Publishers and Subscribers

The publisher-subscriber model is a fundamental concept in ROS 2. It allows for decoupled communication between different parts of a robotic system.

*   **Publishers:** A publisher is a node that sends out messages on a specific topic. For example, a camera node might publish images on an `image` topic.
*   **Subscribers:** A subscriber is a node that listens for messages on a specific topic. For example, an image processing node might subscribe to the `image` topic to receive images from the camera.

This model allows you to build complex systems from smaller, reusable components. You can have multiple publishers and multiple subscribers on the same topic.


---
### Creating a Publisher in Python

Here is the code for a simple publisher node in Python.

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class PublisherNode(Node):
    def __init__(self):
        super().__init__('publisher_node')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    publisher_node = PublisherNode()
    rclpy.spin(publisher_node)
    publisher_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

To run this, you would follow the steps in Chapter 3 to create a package, build it, and run the node.


---
### Creating a Subscriber in Python

Here is the code for a simple subscriber node in Python.

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SubscriberNode(Node):
    def __init__(self):
        super().__init__('subscriber_node')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    subscriber_node = SubscriberNode()
    rclpy.spin(subscriber_node)
    subscriber_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```


---
### Creating a Publisher in C++

Here is the code for a simple publisher node in C++.

```cpp
#include <chrono>
#include <functional>
#include <memory>
#include <string>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

using namespace std::chrono_literals;

class PublisherNode : public rclcpp::Node
{
public:
  PublisherNode()
  : Node("publisher_node"), count_(0)
  {
    publisher_ = this->create_publisher<std_msgs::msg::String>("topic", 10);
    timer_ = this->create_wall_timer(
      500ms, std::bind(&PublisherNode::timer_callback, this));
  }

private:
  void timer_callback()
  {
    auto message = std_msgs::msg::String();
    message.data = "Hello, world! " + std::to_string(count_++);
    RCLCPP_INFO(this->get_logger(), "Publishing: '%s'", message.data.c_str());
    publisher_->publish(message);
  }
  rclcpp::TimerBase::SharedPtr timer_;
  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr publisher_;
  size_t count_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<PublisherNode>());
  rclcpp::shutdown();
  return 0;
}
```


---
### Creating a Subscriber in C++

Here is the code for a simple subscriber node in C++.

```cpp
#include <memory>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"
using std::placeholders::_1;

class SubscriberNode : public rclcpp::Node
{
public:
  SubscriberNode()
  : Node("subscriber_node")
  {
    subscription_ = this->create_subscription<std_msgs::msg::String>(
      "topic", 10, std::bind(&SubscriberNode::topic_callback, this, _1));
  }

private:
  void topic_callback(const std_msgs::msg::String::SharedPtr msg) const
  {
    RCLCPP_INFO(this->get_logger(), "I heard: '%s'", msg->data.c_str());
  }
  rclcpp::Subscription<std_msgs::msg::String>::SharedPtr subscription_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<SubscriberNode>());
  rclcpp::shutdown();
  return 0;
}
```


---
### Custom Message Types

You can define your own message types to send complex data structures between nodes.

**1. Create an Interface Package**

It's best practice to create a separate package for your custom message types.

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake custom_interfaces
```

**2. Define the Message**

Create a `msg` directory and a `.msg` file.

```bash
cd custom_interfaces
mkdir msg
touch msg/MyMessage.msg
```

Define your message fields in `msg/MyMessage.msg`:

```
int32 number
string text
```

**3. Modify `package.xml`**

Add the following to your `package.xml`:

```xml
<build_depend>rosidl_default_generators</build_depend>
<exec_depend>rosidl_default_runtime</exec_depend>
<member_of_group>rosidl_interface_packages</member_of_group>
```

**4. Modify `CMakeLists.txt`**

Add the following to your `CMakeLists.txt`:

```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "msg/MyMessage.msg"
)
```

**5. Build the Package**

Build the interface package.

```bash
cd ~/ros2_ws
colcon build --packages-select custom_interfaces
```

**6. Use the Custom Message**

You can now use this custom message in your Python or C++ nodes by importing it.

```python
from custom_interfaces.msg import MyMessage
```


---

## Chapter 5: ROS 2 Services

### Services and Clients

Services are a request-response communication pattern in ROS 2. They are used for synchronous, one-to-one communication between nodes.

*   **Service:** A service is a node that provides a specific service. It waits for a request, performs a task, and then sends back a response.
*   **Client:** A client is a node that requests a service from a service node. It sends a request and waits for the response.

Services are useful for tasks that have a clear beginning and end, and where a response is expected. For example, a service could be used to request the current position of a robot arm.

---
### خدمات اور کلائنٹس

خدمات ROS 2 میں ایک درخواست-جواب مواصلاتی نمونہ ہیں۔ وہ نوڈس کے درمیان ہم وقت ساز، ون ٹو ون مواصلات کے لیے استعمال ہوتی ہیں۔

*   **سروس:** ایک سروس ایک نوڈ ہے جو ایک مخصوص سروس فراہم کرتی ہے۔ یہ درخواست کا انتظار کرتی ہے، ایک کام انجام دیتی ہے، اور پھر جواب واپس بھیجتی ہے۔
*   **کلائنٹ:** ایک کلائنٹ ایک نوڈ ہے جو سروس نوڈ سے سروس کی درخواست کرتا ہے۔ یہ ایک درخواست بھیجتا ہے اور جواب کا انتظار کرتا ہے۔

خدمات ان کاموں کے لیے مفید ہیں جن کا آغاز اور اختتام واضح ہوتا ہے، اور جہاں جواب کی توقع کی جاتی ہے۔ مثال کے طور پر، ایک سروس روبوٹ بازو کی موجودہ پوزیشن کی درخواست کرنے کے لیے استعمال کی جاسکتی ہے۔

### Creating a ROS 2 Service in Python

This example demonstrates a simple service that adds two integers.

**1. Create a ROS 2 Package:**
First, create a new ROS 2 package if you haven't already.

```bash
ros2 pkg create --build-type ament_python my_python_service_pkg --dependencies rclpy example_interfaces
```

**2. Define the Service Server (Python):**
Create a Python file (e.g., `add_two_ints_server.py`) inside your package's `my_python_service_pkg` directory (e.g., `~/ros2_ws/src/my_python_service_pkg/my_python_service_pkg/`).

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # Import the service type

class AddTwoIntsService(Node):

    def __init__(self):
        super().__init__('add_two_ints_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
        self.get_logger().info('Ready to add two ints.')

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request: a={request.a}, b={request.b}')
        self.get_logger().info(f'Sending response: sum={response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_service = AddTwoIntsService()
    rclpy.spin(add_two_ints_service)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```
### پائتھن میں ROS 2 سروس بنانا

یہ مثال ایک سادہ سروس کو ظاہر کرتی ہے جو دو انٹیجرز کو جمع کرتی ہے۔

**1. ROS 2 پیکیج بنائیں:**
سب سے پہلے، اگر آپ نے پہلے سے نہیں بنایا ہے تو ایک نیا ROS 2 پیکیج بنائیں۔

```bash
ros2 pkg create --build-type ament_python my_python_service_pkg --dependencies rclpy example_interfaces
```

**2. سروس سرور کی تعریف کریں (پائتھن):**
اپنی پیکیج کی `my_python_service_pkg` ڈائرکٹری (مثلاً، `~/ros2_ws/src/my_python_service_pkg/my_python_service_pkg/`) کے اندر ایک پائتھن فائل (مثلاً، `add_two_ints_server.py`) بنائیں۔

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # سروس کی قسم درآمد کریں

class AddTwoIntsService(Node):

    def __init__(self):
        super().__init__('add_two_ints_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
        self.get_logger().info('Ready to add two ints.')

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'Incoming request: a={request.a}, b={request.b}')
        self.get_logger().info(f'Sending response: sum={response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_service = AddTwoIntsService()
    rclpy.spin(add_two_ints_service)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Creating a ROS 2 Client in Python

**3. Define the Service Client (Python):**
Create another Python file (e.g., `add_two_ints_client.py`) in the same directory as the server.

```python
import sys
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # Import the service type

class AddTwoIntsClient(Node):

    def __init__(self):
        super().__init__('add_two_ints_client')
        self.client = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        self.future = self.client.call_async(self.req)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_client = AddTwoIntsClient()

    if len(sys.argv) != 3:
        add_two_ints_client.get_logger().info('Usage: ros2 run my_python_service_pkg add_two_ints_client A B')
        return

    a = int(sys.argv[1])
    b = int(sys.argv[2])
    response = add_two_ints_client.send_request(a, b)
    add_two_ints_client.get_logger().info(f'Result of add_two_ints: {response.sum}')

    add_two_ints_client.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**4. Update `setup.py`:**
Add the entry points for your executables in `setup.py` within the `entry_points` dictionary of `my_python_service_pkg`.

```python
entry_points={
    'console_scripts': [
        'server = my_python_service_pkg.add_two_ints_server:main',
        'client = my_python_service_pkg.add_two_ints_client:main',
    ],
},
```

**5. Build and Run (Python Service):**
Navigate to your workspace root (`ros2_ws`) and build:

```bash
colcon build --packages-select my_python_service_pkg
source install/setup.bash
```

Run the server in one terminal:

```bash
ros2 run my_python_service_pkg server
```

Run the client in another terminal, providing two numbers:

```bash
ros2 run my_python_service_pkg client 3 4
```

### پائتھن میں ROS 2 کلائنٹ بنانا

**3. سروس کلائنٹ کی تعریف کریں (پائتھن):**
سرور جیسی ہی ڈائریکٹری میں ایک اور پائتھن فائل (مثلاً، `add_two_ints_client.py`) بنائیں۔

```python
import sys
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts # سروس کی قسم درآمد کریں

class AddTwoIntsClient(Node):

    def __init__(self):
        super().__init__('add_two_ints_client')
        self.client = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        self.future = self.client.call_async(self.req)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()

def main(args=None):
    rclpy.init(args=args)
    add_two_ints_client = AddTwoIntsClient()

    if len(sys.argv) != 3:
        add_two_ints_client.get_logger().info('Usage: ros2 run my_python_service_pkg add_two_ints_client A B')
        return

    a = int(sys.argv[1])
    b = int(sys.argv[2])
    response = add_two_ints_client.send_request(a, b)
    add_two_ints_client.get_logger().info(f'Result of add_two_ints: {response.sum}')

    add_two_ints_client.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**4. `setup.py` کو اپ ڈیٹ کریں:**
اپنی `my_python_service_pkg` کے `setup.py` میں `entry_points` ڈکشنری کے اندر اپنے ایکزیکیوٹیبلز کے لیے انٹری پوائنٹس شامل کریں۔

```python
entry_points={
    'console_scripts': [
        'server = my_python_service_pkg.add_two_ints_server:main',
        'client = my_python_service_pkg.add_two_ints_client:main',
    ],
},
```

**5. بنائیں اور چلائیں (پائتھن سروس):**
اپنی ورک اسپیس کی روٹ (`ros2_ws`) پر جائیں اور بنائیں:

```bash
colcon build --packages-select my_python_service_pkg
source install/setup.bash
```

ایک ٹرمینل میں سرور چلائیں:

```bash
ros2 run my_python_service_pkg server
```

دوسرے ٹرمینل میں کلائنٹ چلائیں، دو نمبر فراہم کریں:

```bash
ros2 run my_python_service_pkg client 3 4
```

### Creating a ROS 2 Service in C++

This example also uses the `AddTwoInts` service.

**1. Create a ROS 2 Package:**
Create a new ROS 2 package with the `--build-type ament_cmake` option.

```bash
ros2 pkg create --build-type ament_cmake my_cpp_service_pkg --dependencies rclcpp example_interfaces
```

**2. Define the Service Server (C++):**
Create a C++ file (e.g., `add_two_ints_server.cpp`) inside `my_cpp_service_pkg/src`.

```cpp
#include "rclcpp/rclcpp.hpp"
#include "example_interfaces/srv/add_two_ints.hpp" // Import the service type

#include <memory>

void add(const std::shared_ptr<example_interfaces::srv::AddTwoInts::Request> request,
         std::shared_ptr<example_interfaces::srv::AddTwoInts::Response>      response)
{
  response->sum = request->a + request->b;
  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Incoming request\na: %ld b: %ld",
              request->a, request->b);
  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "sending back response: [%ld]", (long int)response->sum);
}

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);

  std::shared_ptr<rclcpp::Node> node = rclcpp::Node::make_shared("add_two_ints_server");

  rclcpp::Service<example_interfaces::srv::AddTwoInts>::SharedPtr service =
    node->create_service<example_interfaces::srv::AddTwoInts>("add_two_ints", &add);

  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Ready to add two ints.");

  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

### سی++ میں ROS 2 سروس بنانا

یہ مثال بھی `AddTwoInts` سروس استعمال کرتی ہے۔

**1. ROS 2 پیکیج بنائیں:**
`--build-type ament_cmake` آپشن کے ساتھ ایک نیا ROS 2 پیکیج بنائیں۔

```bash
ros2 pkg create --build-type ament_cmake my_cpp_service_pkg --dependencies rclcpp example_interfaces
```

**2. سروس سرور کی تعریف کریں (سی++):**
`my_cpp_service_pkg/src` کے اندر ایک سی++ فائل (مثلاً، `add_two_ints_server.cpp`) بنائیں۔

```cpp
#include "rclcpp/rclcpp.hpp"
#include "example_interfaces/srv/add_two_ints.hpp" // سروس کی قسم درآمد کریں

#include <memory>

void add(const std::shared_ptr<example_interfaces::srv::AddTwoInts::Request> request,
         std::shared_ptr<example_interfaces::srv::AddTwoInts::Response>      response)
{
  response->sum = request->a + request->b;
  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Incoming request\na: %ld b: %ld",
              request->a, request->b);
  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "sending back response: [%ld]", (long int)response->sum);
}

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);

  std::shared_ptr<rclcpp::Node> node = rclcpp::Node::make_shared("add_two_ints_server");

  rclcpp::Service<example_interfaces::srv::AddTwoInts>::SharedPtr service =
    node->create_service<example_interfaces::srv::AddTwoInts>("add_two_ints", &add);

  RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Ready to add two ints.");

  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

### Creating a ROS 2 Client in C++

**3. Define the Service Client (C++):**
Create another C++ file (e.g., `add_two_ints_client.cpp`) in the same `my_cpp_service_pkg/src` directory.

```cpp
#include "rclcpp/rclcpp.hpp"
#include "example_interfaces/srv/add_two_ints.hpp" // Import the service type

#include <chrono>
#include <cstdlib>
#include <memory>

using namespace std::chrono_literals;

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);

  if (argc != 3) {
      RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "usage: add_two_ints_client X Y");
      return 1;
  }

  std::shared_ptr<rclcpp::Node> node = rclcpp::Node::make_shared("add_two_ints_client");
  rclcpp::Client<example_interfaces::srv::AddTwoInts>::SharedPtr client =
    node->create_client<example_interfaces::srv::AddTwoInts>("add_two_ints");

  auto request = std::make_shared<example_interfaces::srv::AddTwoInts::Request>();
  request->a = atoll(argv[1]);
  request->b = atoll(argv[2]);

  while (!client->wait_for_service(1s)) {
    if (!rclcpp::ok()) {
      RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Interrupted while waiting for the service. Exiting.");
      return 0;
    }
    RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "service not available, waiting again...");
  }

  auto result = client->async_send_request(request);
  // Wait for the result.
  if (rclcpp::spin_until_future_complete(node, result) ==
    rclcpp::FutureReturnCode::SUCCESS)
  {
    RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Sum: %ld", result.get()->sum);
  } else {
    RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Failed to call service add_two_ints");
  }

  rclcpp::shutdown();
  return 0;
}
```

**4. Update `CMakeLists.txt`:**
In `my_cpp_service_pkg/CMakeLists.txt`, add the executables and link dependencies:

```cmake
find_package(rclcpp REQUIRED)
find_package(example_interfaces REQUIRED)

add_executable(server src/add_two_ints_server.cpp)
ament_target_dependencies(server rclcpp example_interfaces)

add_executable(client src/add_two_ints_client.cpp)
ament_target_dependencies(client rclcpp example_interfaces)

install(TARGETS
  server
  client
  DESTINATION lib/${PROJECT_NAME}
)
```

**5. Build and Run (C++ Service):**
Navigate to your workspace root (`ros2_ws`) and build:

```bash
colcon build --packages-select my_cpp_service_pkg
source install/setup.bash
```

Run the server in one terminal:

```bash
ros2 run my_cpp_service_pkg server
```

Run the client in another terminal, providing two numbers:

```bash
ros2 run my_cpp_service_pkg client 5 6
```

### سی++ میں ROS 2 کلائنٹ بنانا

**3. سروس کلائنٹ کی تعریف کریں (سی++):**
`my_cpp_service_pkg/src` ڈائریکٹری میں ایک اور سی++ فائل (مثلاً، `add_two_ints_client.cpp`) بنائیں۔

```cpp
#include "rclcpp/rclcpp.hpp"
#include "example_interfaces/srv/add_two_ints.hpp" // سروس کی قسم درآمد کریں

#include <chrono>
#include <cstdlib>
#include <memory>

using namespace std::chrono_literals;

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);

  if (argc != 3) {
      RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "usage: add_two_ints_client X Y");
      return 1;
  }

  std::shared_ptr<rclcpp::Node> node = rclcpp::Node::make_shared("add_two_ints_client");
  rclcpp::Client<example_interfaces::srv::AddTwoInts>::SharedPtr client =
    node->create_client<example_interfaces::srv::AddTwoInts>("add_two_ints");

  auto request = std::make_shared<example_interfaces::srv::AddTwoInts::Request>();
  request->a = atoll(argv[1]);
  request->b = atoll(argv[2]);

  while (!client->wait_for_service(1s)) {
    if (!rclcpp::ok()) {
      RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Interrupted while waiting for the service. Exiting.");
      return 0;
    }
    RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "service not available, waiting again...");
  }

  auto result = client->async_send_request(request);
  // نتیجے کا انتظار کریں۔
  if (rclcpp::spin_until_future_complete(node, result) ==
    rclcpp::FutureReturnCode::SUCCESS)
  {
    RCLCPP_INFO(rclcpp::get_logger("rclcpp"), "Sum: %ld", result.get()->sum);
  } else {
    RCLCPP_ERROR(rclcpp::get_logger("rclcpp"), "Failed to call service add_two_ints");
  }

  rclcpp::shutdown();
  return 0;
}
```

**4. `CMakeLists.txt` کو اپ ڈیٹ کریں:**
`my_cpp_service_pkg/CMakeLists.txt` میں، ایکزیکیوٹیبلز اور لنک ڈیپینڈنسیز شامل کریں:

```cmake
find_package(rclcpp REQUIRED)
find_package(example_interfaces REQUIRED)

add_executable(server src/add_two_ints_server.cpp)
ament_target_dependencies(server rclcpp example_interfaces)

add_executable(client src/add_two_ints_client.cpp)
ament_target_dependencies(client rclcpp example_interfaces)

install(TARGETS
  server
  client
  DESTINATION lib/${PROJECT_NAME}
)
```

**5. بنائیں اور چلائیں (سی++ سروس):**
اپنی ورک اسپیس کی روٹ (`ros2_ws`) پر جائیں اور بنائیں:

```bash
colcon build --packages-select my_cpp_service_pkg
source install/setup.bash
```

ایک ٹرمینل میں سرور چلائیں:

```bash
ros2 run my_cpp_service_pkg server
```

دوسرے ٹرمینل میں کلائنٹ چلائیں، دو نمبر فراہم کریں:

```bash
ros2 run my_cpp_service_pkg client 5 6
```

### ROS 2 Custom Service Type Example

To create a custom service type, you define its request and response structure in a `.srv` file.

**1. Create a Custom Interface Package:**
It's good practice to create a separate package for your custom messages and services. This package must be an `ament_cmake` package.

```bash
ros2 pkg create --build-type ament_cmake tutorial_interfaces --dependencies rclcpp rosidl_default_generators
```

**2. Define the Custom Service (`.srv` file):**
Inside your `tutorial_interfaces` package, create a directory named `srv` (e.g., `tutorial_interfaces/srv`).
Create a file named `AddThreeInts.srv` inside the `srv` directory with the following content:

```
int64 a
int64 b
int64 c
---
int64 sum
```
The section before `---` defines the request fields, and the section after `---` defines the response fields.

**3. Update `CMakeLists.txt` for the Custom Interface Package:**
In `tutorial_interfaces/CMakeLists.txt`, add the following lines to enable the generation of language-specific code from your `.srv` file:

```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "srv/AddThreeInts.srv"
)

ament_export_dependencies(rosidl_default_runtime)
```

**4. Update `package.xml` for the Custom Interface Package:**
In `tutorial_interfaces/package.xml`, add these dependencies:

```xml
  <buildtool_depend>ament_cmake</buildtool_depend>
  <build_depend>rosidl_default_generators</build_depend>
  <exec_depend>rosidl_default_runtime</exec_depend>
  <member_of_group>rosidl_interface_packages</member_of_group>
```

**5. Build the Custom Interface Package:**
Navigate to your workspace root (`ros2_ws`) and build the `tutorial_interfaces` package:

```bash
colcon build --packages-select tutorial_interfaces
source install/setup.bash
```
This step generates the necessary header files (for C++) and Python modules for your custom service.

**6. Use the Custom Service in Python:**
You can now use `tutorial_interfaces.srv.AddThreeInts` in your Python service and client nodes, similar to the `example_interfaces.srv.AddTwoInts` example. Remember to add `tutorial_interfaces` as a dependency in your Python package's `package.xml` and `setup.py`.

**7. Use the Custom Service in C++:**
Similarly, you can include `tutorial_interfaces/srv/add_three_ints.hpp` in your C++ service and client nodes. Remember to add `tutorial_interfaces` as a dependency in your C++ package's `package.xml` and `CMakeLists.txt`.

By following these steps, you can create and utilize custom service types in your ROS 2 applications for both Python and C++.

### ROS 2 کسٹم سروس کی قسم کی مثال

ایک کسٹم سروس کی قسم بنانے کے لیے، آپ اس کی درخواست اور جواب کے ڈھانچے کو ایک `.srv` فائل میں بیان کرتے ہیں۔

**1. ایک کسٹم انٹرفیس پیکیج بنائیں:**
یہ ایک اچھی مشق ہے کہ آپ اپنے کسٹم میسجز اور سروسز کے لیے ایک الگ پیکیج بنائیں۔ یہ پیکیج ایک `ament_cmake` پیکیج ہونا چاہیے۔

```bash
ros2 pkg create --build-type ament_cmake tutorial_interfaces --dependencies rclcpp rosidl_default_generators
```

**2. کسٹم سروس کی تعریف کریں (`.srv` فائل):**
اپنے `tutorial_interfaces` پیکیج کے اندر، `srv` نامی ایک ڈائریکٹری بنائیں (مثلاً، `tutorial_interfaces/srv`)۔
`srv` ڈائریکٹری کے اندر `AddThreeInts.srv` نامی ایک فائل بنائیں جس میں درج ذیل مواد ہو:

```
int64 a
int64 b
int64 c
---
int64 sum
```
`---` سے پہلے کا حصہ درخواست کے فیلڈز کی تعریف کرتا ہے، اور `---` کے بعد کا حصہ جواب کے فیلڈز کی تعریف کرتا ہے۔

**3. کسٹم انٹرفیس پیکیج کے لیے `CMakeLists.txt` کو اپ ڈیٹ کریں:**
`tutorial_interfaces/CMakeLists.txt` میں، درج ذیل لائنز شامل کریں تاکہ آپ کی `.srv` فائل سے زبان کے لحاظ سے مخصوص کوڈ کی تیاری کو فعال کیا جا سکے:

```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "srv/AddThreeInts.srv"
)

ament_export_dependencies(rosidl_default_runtime)
```

**4. کسٹم انٹرفیس پیکیج کے لیے `package.xml` کو اپ ڈیٹ کریں:**
`tutorial_interfaces/package.xml` میں، یہ ڈیپینڈنسیز شامل کریں:

```xml
  <buildtool_depend>ament_cmake</buildtool_depend>
  <build_depend>rosidl_default_generators</build_depend>
  <exec_depend>rosidl_default_runtime</exec_depend>
  <member_of_group>rosidl_interface_packages</member_of_group>
```

**5. کسٹم انٹرفیس پیکیج بنائیں:**
اپنی ورک اسپیس کی روٹ (`ros2_ws`) پر جائیں اور `tutorial_interfaces` پیکیج بنائیں:

```bash
colcon build --packages-select tutorial_interfaces
source install/setup.bash
```
یہ مرحلہ آپ کی کسٹم سروس کے لیے ضروری ہیڈر فائلز (سی++ کے لیے) اور پائتھن ماڈیولز تیار کرتا ہے۔

**6. پائتھن میں کسٹم سروس استعمال کریں:**
اب آپ اپنی پائتھن سروس اور کلائنٹ نوڈز میں `tutorial_interfaces.srv.AddThreeInts` استعمال کر سکتے ہیں، جیسا کہ `example_interfaces.srv.AddTwoInts` مثال میں ہے۔ یاد رکھیں کہ اپنے پائتھن پیکیج کی `package.xml` اور `setup.py` میں `tutorial_interfaces` کو ایک ڈیپینڈنسی کے طور پر شامل کریں۔

**7. سی++ میں کسٹم سروس استعمال کریں:**
اسی طرح، آپ اپنے سی++ سروس اور کلائنٹ نوڈز میں `tutorial_interfaces/srv/add_three_ints.hpp` شامل کر سکتے ہیں۔ یاد رکھیں کہ اپنے سی++ پیکیج کی `package.xml` اور `CMakeLists.txt` میں `tutorial_interfaces` کو ایک ڈیپینڈنسی کے طور پر شامل کریں۔

ان اقدامات پر عمل کرکے، آپ پائتھن اور سی++ دونوں کے لیے اپنی ROS 2 ایپلی کیشنز میں کسٹم سروس کی اقسام بنا اور استعمال کر سکتے ہیں۔

---

## Chapter 6: ROS 2 Actions

Actions in ROS 2 are a communication mechanism designed for long-running tasks that require continuous feedback and the ability to be canceled or preempted. They provide a more robust and feature-rich way to handle complex operations compared to topics (one-way streaming) or services (single request-response). Actions allow a client to send a goal, receive continuous feedback on the task's progress, and eventually get a final result, all while retaining the ability to preempt (cancel) the task if needed. This makes them perfectly suited for scenarios like robot navigation, manipulating objects, or any task that involves a sequence of operations over an extended period.

### ROS 2 ایکشنز

ROS 2 میں ایکشنز (Actions) مواصلات کا ایک ایسا طریقہ کار ہیں جو طویل عرصے تک چلنے والے کاموں کے لیے ڈیزائن کیے گئے ہیں جن کے لیے مسلسل فیڈ بیک اور منسوخ یا روکے جانے کی صلاحیت کی ضرورت ہوتی ہے۔ یہ ٹاپکس (یک طرفہ سٹریمنگ) یا سروسز (واحد درخواست-جواب) کے مقابلے میں پیچیدہ آپریشنز کو ہینڈل کرنے کا ایک زیادہ مضبوط اور خصوصیت سے بھرپور طریقہ فراہم کرتے ہیں۔ ایکشنز کلائنٹ کو ایک مقصد بھیجنے، کام کی پیشرفت پر مسلسل فیڈ بیک حاصل کرنے، اور بالآخر حتمی نتیجہ حاصل کرنے کی اجازت دیتے ہیں، یہ سب اس بات کو برقرار رکھتے ہوئے کہ ضرورت پڑنے پر کام کو روکا (منسوخ کیا) جا سکے۔ یہ انہیں روبوٹ نیویگیشن، اشیاء کو سنبھالنے، یا کسی بھی ایسے کام کے لیے بہترین موزوں بناتا ہے جس میں ایک طویل مدت میں کارروائیوں کا ایک سلسلہ شامل ہوتا ہے۔

### Goal, Feedback, and Result Communication Model

The action communication model involves three distinct parts:

1.  **Goal:** The action client sends a "goal" to the action server. This goal describes the desired outcome or task to be performed (e.g., "navigate to coordinates X, Y" or "pick up the red cube"). The server then processes this goal and typically responds with an acceptance or rejection.

2.  **Feedback:** Once the server accepts and begins executing the goal, it periodically sends "feedback" messages back to the client. This feedback provides real-time updates on the task's progress (e.g., "robot at 50% distance to target," "current joint angles"). This allows the client to monitor the ongoing operation and react if necessary.

3.  **Result:** When the action server completes the goal (either successfully, with failure, or due to preemption), it sends a "result" back to the client. The result contains the final outcome of the task and any relevant data (e.g., "navigation successful," "object picked up," "task failed due to obstacle").

This sophisticated communication pattern offers a transparent and controllable way to manage complex robotic behaviors.

### مقصد، فیڈ بیک، اور نتیجہ مواصلاتی ماڈل

ایکشن مواصلاتی ماڈل میں تین الگ حصے شامل ہیں:

1.  **مقصد (Goal):** ایکشن کلائنٹ ایک "مقصد" ایکشن سرور کو بھیجتا ہے۔ یہ مقصد مطلوبہ نتیجہ یا انجام دیے جانے والے کام کو بیان کرتا ہے (مثلاً، "کوآرڈینیٹس X، Y پر نیویگیٹ کریں" یا "سرخ کیوب اٹھائیں")۔ سرور پھر اس مقصد پر کارروائی کرتا ہے اور عام طور پر قبولیت یا رد عمل کے ساتھ جواب دیتا ہے۔

2.  **فیڈ بیک (Feedback):** ایک بار جب سرور مقصد کو قبول کر لیتا ہے اور اسے انجام دینا شروع کر دیتا ہے، تو وہ وقتاً فوقتاً "فیڈ بیک" پیغامات کلائنٹ کو واپس بھیجتا ہے۔ یہ فیڈ بیک کام کی پیشرفت کے بارے میں حقیقی وقت کی اپ ڈیٹس فراہم کرتا ہے (مثلاً، "روبوٹ ہدف سے 50٪ فاصلے پر ہے،" "موجودہ جوائنٹ زاویے")۔ یہ کلائنٹ کو جاری آپریشن کی نگرانی کرنے اور ضرورت پڑنے پر رد عمل ظاہر کرنے کی اجازت دیتا ہے۔

3.  **نتیجہ (Result):** جب ایکشن سرور مقصد کو مکمل کر لیتا ہے (یا تو کامیابی سے، ناکامی کے ساتھ، یا پریمپشن کی وجہ سے)، تو وہ کلائنٹ کو ایک "نتیجہ" واپس بھیجتا ہے۔ نتیجہ کام کے حتمی نتیجے اور کسی بھی متعلقہ ڈیٹا کو سمیٹتا ہے (مثلاً، "نیویگیشن کامیاب،" "آبجیکٹ اٹھایا گیا،" "رکاوٹ کی وجہ سے کام ناکام")۔

یہ نفیس مواصلاتی نمونہ پیچیدہ روبوٹک رویوں کو منظم کرنے کا ایک شفاف اور قابل کنٹرول طریقہ پیش کرتا ہے۔

### Key Characteristics of Actions

*   **Long-running Tasks:** Ideal for operations that take a significant amount of time to complete.
*   **Asynchronous & Goal-oriented:** Clients send a goal and don't block waiting for the result immediately; they receive feedback asynchronously.
*   **Preemption Capability:** Clients can request to cancel an ongoing goal, allowing for dynamic control over the robot's actions.
*   **Continuous Feedback:** Provides rich information about the task's progress, which is crucial for monitoring and decision-making.
*   **Definition in `.action` files:** The structure of the goal, result, and feedback messages for an action is defined in a single `.action` file.

### ایکشنز کی اہم خصوصیات

*   **طویل عرصے تک چلنے والے کام (Long-running Tasks):** ایسے آپریشنز کے لیے مثالی ہیں جن کو مکمل ہونے میں کافی وقت لگتا ہے۔
*   **غیر ہم وقت ساز اور مقصد پر مبنی (Asynchronous & Goal-oriented):** کلائنٹ ایک مقصد بھیجتا ہے اور فوری طور پر نتیجہ کا انتظار نہیں کرتا؛ وہ غیر ہم وقت ساز طریقے سے فیڈ بیک حاصل کرتے ہیں۔
*   **پریمپشن کی صلاحیت (Preemption Capability):** کلائنٹ جاری مقصد کو منسوخ کرنے کی درخواست کر سکتے ہیں، جو روبوٹ کے اعمال پر متحرک کنٹرول کی اجازت دیتا ہے۔
*   **مسلسل فیڈ بیک (Continuous Feedback):** کام کی پیشرفت کے بارے میں بھرپور معلومات فراہم کرتا ہے، جو نگرانی اور فیصلہ سازی کے لیے بہت اہم ہے۔
*   **`.action` فائلوں میں تعریف (Definition in `.action` files):** ایک ایکشن کے لیے مقصد، نتیجہ، اور فیڈ بیک پیغامات کی ساخت ایک واحد `.action` فائل میں بیان کی جاتی ہے۔

### ROS 2 Custom Action Type Example

First, you need to define the structure of your action's Goal, Feedback, and Result in a `.action` file. This file is typically placed in an `action` directory within an interface package.

**Example: `Fibonacci.action`**
```
#goal definition
int32 order
---
#result definition
int32[] sequence
---
#feedback
int32[] partial_sequence
```
This example defines a `Fibonacci` action where:
*   The **Goal** is an `int32 order`.
*   The **Result** is an array of `int32` representing the Fibonacci sequence.
*   The **Feedback** is also an array of `int32` showing the sequence generated so far.

**1. Create a Custom Interface Package:**
It's good practice to create a separate package for your custom messages, services, and actions. This package must be an `ament_cmake` package.

```bash
ros2 pkg create --build-type ament_cmake tutorial_interfaces --dependencies rclcpp rosidl_default_generators action_msgs
```

**2. Define the Custom Action (`.action` file):**
Inside your `tutorial_interfaces` package, create a directory named `action` (e.g., `tutorial_interfaces/action`).
Create a file named `Fibonacci.action` inside the `action` directory with the content shown above.

**3. Update `CMakeLists.txt` for the Custom Interface Package:**
In `tutorial_interfaces/CMakeLists.txt`, add the following lines to enable the generation of language-specific code from your `.action` file:

```cmake
find_package(rosidl_default_generators REQUIRED)
find_package(action_msgs REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "action/Fibonacci.action"
)

ament_export_dependencies(rosidl_default_runtime action_msgs)
```

**4. Update `package.xml` for the Custom Interface Package:**
In `tutorial_interfaces/package.xml`, add these dependencies:

```xml
  <buildtool_depend>ament_cmake</buildtool_depend>
  <build_depend>rosidl_default_generators</build_depend>
  <exec_depend>rosidl_default_runtime</exec_depend>
  <depend>action_msgs</depend>
  <member_of_group>rosidl_interface_packages</member_of_group>
```

**5. Build the Custom Interface Package:**
Navigate to your workspace root (`ros2_ws`) and build the `tutorial_interfaces` package:

```bash
colcon build --packages-select tutorial_interfaces
source install/setup.bash
```
This step generates the necessary header files (for C++) and Python modules for your custom action.

### ROS 2 کسٹم ایکشن کی قسم کی مثال

سب سے پہلے، آپ کو اپنی ایکشن کے مقصد، فیڈ بیک، اور نتیجے کے ڈھانچے کو ایک `.action` فائل میں بیان کرنے کی ضرورت ہے۔ یہ فائل عام طور پر ایک انٹرفیس پیکیج کے اندر ایک `action` ڈائریکٹری میں رکھی جاتی ہے۔

**مثال: `Fibonacci.action`**
```
#goal definition
int32 order
---
#result definition
int32[] sequence
---
#feedback
int32[] partial_sequence
```
یہ مثال ایک `Fibonacci` ایکشن کی تعریف کرتی ہے جہاں:
*   **مقصد (Goal)** ایک `int32 order` ہے۔
*   **نتیجہ (Result)** فبونیکی ترتیب کی نمائندگی کرنے والی `int32` کی ایک صف ہے۔
*   **فیڈ بیک (Feedback)** بھی `int32` کی ایک صف ہے جو اب تک تیار کردہ ترتیب کو دکھاتی ہے۔

**1. ایک کسٹم انٹرفیس پیکیج بنائیں:**
یہ ایک اچھی مشق ہے کہ آپ اپنے کسٹم میسجز، سروسز، اور ایکشنز کے لیے ایک الگ پیکیج بنائیں۔ یہ پیکیج ایک `ament_cmake` پیکیج ہونا چاہیے۔

```bash
ros2 pkg create --build-type ament_cmake tutorial_interfaces --dependencies rclcpp rosidl_default_generators action_msgs
```

**2. کسٹم ایکشن کی تعریف کریں (`.action` فائل):**
اپنے `tutorial_interfaces` پیکیج کے اندر، `action` نامی ایک ڈائریکٹری بنائیں (مثلاً، `tutorial_interfaces/action`)۔
`action` ڈائریکٹری کے اندر `Fibonacci.action` نامی ایک فائل بنائیں جس میں اوپر دکھایا گیا مواد ہو۔

**3. کسٹم انٹرفیس پیکیج کے لیے `CMakeLists.txt` کو اپ ڈیٹ کریں:**
`tutorial_interfaces/CMakeLists.txt` میں، درج ذیل لائنز شامل کریں تاکہ آپ کی `.action` فائل سے زبان کے لحاظ سے مخصوص کوڈ کی تیاری کو فعال کیا جا سکے:

```cmake
find_package(rosidl_default_generators REQUIRED)
find_package(action_msgs REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "action/Fibonacci.action"
)

ament_export_dependencies(rosidl_default_runtime action_msgs)
```

**4. کسٹم انٹرفیس پیکیج کے لیے `package.xml` کو اپ ڈیٹ کریں:**
`tutorial_interfaces/package.xml` میں، یہ ڈیپینڈنسیز شامل کریں:

```xml
  <buildtool_depend>ament_cmake</buildtool_depend>
  <build_depend>rosidl_default_generators</build_depend>
  <exec_depend>rosidl_default_runtime</exec_depend>
  <depend>action_msgs</depend>
  <member_of_group>rosidl_interface_packages</member_of_group>
```

**5. کسٹم انٹرفیس پیکیج بنائیں:**
اپنی ورک اسپیس کی روٹ (`ros2_ws`) پر جائیں اور `tutorial_interfaces` پیکیج بنائیں:

```bash
colcon build --packages-select tutorial_interfaces
source install/setup.bash
```
یہ مرحلہ آپ کی کسٹم ایکشن کے لیے ضروری ہیڈر فائلز (سی++ کے لیے) اور پائتھن ماڈیولز تیار کرتا ہے۔

### Creating an Action Server in Python

The action server is responsible for receiving goal requests, executing the task, providing feedback, and sending the final result.

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node

from tutorial_interfaces.action import Fibonacci # Import your action type

class FibonacciActionServer(Node):
    def __init__(self):
        super().__init__('fibonacci_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback
        )
        self.get_logger().info("Fibonacci Action Server started!")

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.partial_sequence = [0, 1]

        # Append Fibonacci sequence to feedback (up to goal.order)
        for i in range(1, goal_handle.request.order):
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                self.get_logger().info('Goal canceled')
                return Fibonacci.Result() # Return empty result on cancel

            feedback_msg.partial_sequence.append(
                feedback_msg.partial_sequence[i] + feedback_msg.partial_sequence[i-1]
            )
            self.get_logger().info(f'Feedback: {feedback_msg.partial_sequence}')
            goal_handle.publish_feedback(feedback_msg)
            # Simulate work
            import time
            time.sleep(1)

        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.partial_sequence
        self.get_logger().info('Goal succeeded')
        return result

def main(args=None):
    rclpy.init(args=args)
    fibonacci_action_server = FibonacciActionServer()
    rclpy.spin(fibonacci_action_server)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**Build and Run (Python Action Server):**
Assuming you have your custom interface package (`tutorial_interfaces`) built, create a new Python package (e.g., `py_action_pkg`) with `rclpy` and `tutorial_interfaces` dependencies. Place the server code in `py_action_pkg/py_action_pkg/fibonacci_server.py`.

Update `py_action_pkg/setup.py` `entry_points` section:
```python
entry_points={
    'console_scripts': [
        'fibonacci_server = py_action_pkg.fibonacci_server:main',
    ],
},
```
Then build and run:
```bash
colcon build --packages-select py_action_pkg
source install/setup.bash
ros2 run py_action_pkg fibonacci_server
```

### پائتھن میں ایک ایکشن سرور بنانا

ایکشن سرور گول کی درخواستیں وصول کرنے، کام کو انجام دینے، فیڈ بیک فراہم کرنے، اور حتمی نتیجہ بھیجنے کا ذمہ دار ہے۔

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node

from tutorial_interfaces.action import Fibonacci # اپنی ایکشن کی قسم درآمد کریں

class FibonacciActionServer(Node):
    def __init__(self):
        super().__init__('fibonacci_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback
        )
        self.get_logger().info("Fibonacci Action Server started!")

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.partial_sequence = [0, 1]

        # فیبونیکی ترتیب کو فیڈ بیک میں شامل کریں (گول.آرڈر تک)
        for i in range(1, goal_handle.request.order):
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                self.get_logger().info('Goal canceled')
                return Fibonacci.Result() # منسوخی پر خالی نتیجہ واپس کریں

            feedback_msg.partial_sequence.append(
                feedback_msg.partial_sequence[i] + feedback_msg.partial_sequence[i-1]
            )
            self.get_logger().info(f'Feedback: {feedback_msg.partial_sequence}')
            goal_handle.publish_feedback(feedback_msg)
            # کام کی نقل
            import time
            time.sleep(1)

        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.partial_sequence
        self.get_logger().info('Goal succeeded')
        return result

def main(args=None):
    rclpy.init(args=args)
    fibonacci_action_server = FibonacciActionServer()
    rclpy.spin(fibonacci_action_server)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

**بنائیں اور چلائیں (پائتھن ایکشن سرور):**
یہ فرض کرتے ہوئے کہ آپ نے اپنا کسٹم انٹرفیس پیکیج (`tutorial_interfaces`) بنایا ہے، `rclpy` اور `tutorial_interfaces` ڈیپینڈنسیز کے ساتھ ایک نیا پائتھن پیکیج (مثلاً، `py_action_pkg`) بنائیں۔ سرور کوڈ `py_action_pkg/py_action_pkg/fibonacci_server.py` میں رکھیں۔

`py_action_pkg/setup.py` کے `entry_points` سیکشن کو اپ ڈیٹ کریں:
```python
entry_points={
    'console_scripts': [
        'fibonacci_server = py_action_pkg.fibonacci_server:main',
    ],
},
```
پھر بنائیں اور چلائیں:
```bash
colcon build --packages-select py_action_pkg
source install/setup.bash
ros2 run py_action_pkg fibonacci_server
```

### Creating an Action Client in Python

The action client sends goal requests to the server, receives feedback, and processes the final result.

```python
import rclpy
from rclpy.action import ActionClient
from rclpy.node import Node

from tutorial_interfaces.action import Fibonacci # Import your action type

class FibonacciActionClient(Node):
    def __init__(self):
        super().__init__('fibonacci_action_client')
        self._action_client = ActionClient(self, Fibonacci, 'fibonacci')

    def send_goal(self, order):
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order

        self.get_logger().info('Waiting for action server...')
        self._action_client.wait_for_server()

        self.get_logger().info('Sending goal request...')
        self._send_goal_future = self._action_client.send_goal_async(
            goal_msg,
            feedback_callback=self.feedback_callback
        )
        self._send_goal_future.add_done_callback(self.goal_response_callback)

    def goal_response_callback(self, future):
        goal_handle = future.result()
        if not goal_handle.accepted:
            self.get_logger().info('Goal rejected :(')
            return

        self.get_logger().info('Goal accepted :)')
        self._get_result_future = goal_handle.get_result_async()
        self._get_result_future.add_done_callback(self.get_result_callback)

    def get_result_callback(self, future):
        result = future.result().result
        self.get_logger().info(f'Result: {result.sequence}')
        rclpy.shutdown()

    def feedback_callback(self, feedback_msg):
        self.get_logger().info(f'Received feedback: {feedback_msg.feedback.partial_sequence}')

def main(args=None):
    rclpy.init(args=args)
    action_client = FibonacciActionClient()
    action_client.send_goal(10) # Example: Request Fibonacci sequence up to order 10
    rclpy.spin(action_client)

if __name__ == '__main__':
    main()
```

**Build and Run (Python Action Client):**
Place the client code in `py_action_pkg/py_action_pkg/fibonacci_client.py`.
Update `py_action_pkg/setup.py` `entry_points` section:
```python
entry_points={
    'console_scripts': [
        'fibonacci_server = py_action_pkg.fibonacci_server:main', # Keep server entry
        'fibonacci_client = py_action_pkg.fibonacci_client:main',
    ],
},
```
Then build and run the client after the server is running:
```bash
colcon build --packages-select py_action_pkg
source install/setup.bash
ros2 run py_action_pkg fibonacci_client
```

### پائتھن میں ایک ایکشن کلائنٹ بنانا

ایکشن کلائنٹ گول کی درخواستیں سرور کو بھیجتا ہے، فیڈ بیک وصول کرتا ہے، اور حتمی نتیجہ پر کارروائی کرتا ہے۔

```python
import rclpy
from rclpy.action import ActionClient
from rclpy.node import Node

from tutorial_interfaces.action import Fibonacci # اپنی ایکشن کی قسم درآمد کریں

class FibonacciActionClient(Node):
    def __init__(self):
        super().__init__('fibonacci_action_client')
        self._action_client = ActionClient(self, Fibonacci, 'fibonacci')

    def send_goal(self, order):
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order

        self.get_logger().info('Waiting for action server...')
        self._action_client.wait_for_server()

        self.get_logger().info('Sending goal request...')
        self._send_goal_future = self._action_client.send_goal_async(
            goal_msg,
            feedback_callback=self.feedback_callback
        )
        self._send_goal_future.add_done_callback(self.goal_response_callback)

    def goal_response_callback(self, future):
        goal_handle = future.result()
        if not goal_handle.accepted:
            self.get_logger().info('Goal rejected :(')
            return

        self.get_logger().info('Goal accepted :)')
        self._get_result_future = goal_handle.get_result_async()
        self._get_result_future.add_done_callback(self.get_result_callback)

    def get_result_callback(self, future):
        result = future.result().result
        self.get_logger().info(f'Result: {result.sequence}')
        rclpy.shutdown()

    def feedback_callback(self, feedback_msg):
        self.get_logger().info(f'Received feedback: {feedback_msg.feedback.partial_sequence}')

def main(args=None):
    rclpy.init(args=args)
    action_client = FibonacciActionClient()
    action_client.send_goal(10) # مثال: آرڈر 10 تک فبونیکی ترتیب کی درخواست کریں۔
    rclpy.spin(action_client)

if __name__ == '__main__':
    main()
```

**بنائیں اور چلائیں (پائتھن ایکشن کلائنٹ):**
کلائنٹ کوڈ `py_action_pkg/py_action_pkg/fibonacci_client.py` میں رکھیں۔
`py_action_pkg/setup.py` کے `entry_points` سیکشن کو اپ ڈیٹ کریں:
```python
entry_points={
    'console_scripts': [
        'fibonacci_server = py_action_pkg.fibonacci_server:main', # سرور انٹری کو برقرار رکھیں
        'fibonacci_client = py_action_pkg.fibonacci_client:main',
    ],
},
```
پھر سرور چلنے کے بعد کلائنٹ کو بنائیں اور چلائیں:
```bash
colcon build --packages-select py_action_pkg
source install/setup.bash
ros2 run py_action_pkg fibonacci_client
```

### Creating an Action Server in C++

The action server is responsible for receiving goals, executing the long-running task, providing feedback, and sending the final result.

```cpp
#include <functional>
#include <memory>
#include <thread>

#include "rclcpp/rclcpp.hpp"
#include "rclcpp_action/rclcpp_action.hpp"
#include "rclcpp_components/register_node_and_component.hpp"

#include "tutorial_interfaces/action/fibonacci.hpp" // Replace with your action type

class FibonacciActionServer : public rclcpp::Node
{
public:
  using Fibonacci = tutorial_interfaces::action::Fibonacci;
  using GoalHandleFibonacci = rclcpp_action::ServerGoalHandle<Fibonacci>;

  RCLCPP_SHARED_PTR_DEFINITIONS(FibonacciActionServer)

  explicit FibonacciActionServer(const rclcpp::NodeOptions & options = rclcpp::NodeOptions())
  : Node("fibonacci_action_server", options)
  {
    this->action_server_ = rclcpp_action::create_server<Fibonacci>(
      this,
      "fibonacci",
      std::bind(&FibonacciActionServer::handle_goal, this, std::placeholders::_1, std::placeholders::_2),
      std::bind(&FibonacciActionServer::handle_cancel, this, std::placeholders::_1),
      std::bind(&FibonacciActionServer::handle_accepted, this, std::placeholders::_1));

    RCLCPP_INFO(this->get_logger(), "Fibonacci Action Server started!");
  }

private:
  rclcpp_action::Server<Fibonacci>::SharedPtr action_server_;

  rclcpp_action::GoalResponse handle_goal(
    const rclcpp_action::GoalUUID & uuid,
    std::shared_ptr<const Fibonacci::Goal> goal)
  {
    RCLCPP_INFO(this->get_logger(), "Received goal request with order %d", goal->order);
    (void)uuid;
    // Let's reject goals that are too large
    if (goal->order > 50) {
      RCLCPP_WARN(this->get_logger(), "Goal order too high (%d). Rejecting.", goal->order);
      return rclcpp_action::GoalResponse::REJECT;
    }
    return rclcpp_action::GoalResponse::ACCEPT_AND_EXECUTE;
  }

  rclcpp_action::CancelResponse handle_cancel(
    const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    RCLCPP_INFO(this->get_logger(), "Received request to cancel goal");
    (void)goal_handle;
    return rclcpp_action::CancelResponse::ACCEPT;
  }

  void handle_accepted(const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    // this needs to return quickly to avoid blocking the executor, so spin up a new thread
    std::thread{std::bind(&FibonacciActionServer::execute, this, std::placeholders::_1), goal_handle}.detach();
  }

  void execute(const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    RCLCPP_INFO(this->get_logger(), "Executing goal with order %d", goal_handle->request.order);
    rclcpp::Rate loop_rate(1);
    const auto goal = goal_handle->request;
    auto feedback = std::make_shared<Fibonacci::Feedback>();
    auto & sequence = feedback->sequence;
    sequence.push_back(0);
    sequence.push_back(1);
    auto result = std::make_shared<Fibonacci::Result>();

    for (int i = 1; (i < goal->order) && rclcpp::ok(); ++i) {
      if (goal_handle->is_cancel_requested) {
        result->sequence = sequence;
        goal_handle->canceled(result);
        RCLCPP_INFO(this->get_logger(), "Goal canceled");
        return;
      }
      sequence.push_back(sequence[i] + sequence[i - 1]);
      goal_handle->publish_feedback(feedback);
      RCLCPP_INFO(this->get_logger(), "Publishing feedback");

      loop_rate.sleep();
    }

    if (rclcpp::ok()) {
      result->sequence = sequence;
      goal_handle->succeed(result);
      RCLCPP_INFO(this->get_logger(), "Goal succeeded");
    }
  }
};

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);
  auto node = std::make_shared<FibonacciActionServer>();
  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

**Build and Run (C++ Action Server):**
Assuming `tutorial_interfaces` is built, create a new C++ package (e.g., `cpp_action_pkg`) with `rclcpp`, `rclcpp_action`, `rclcpp_components`, and `tutorial_interfaces` dependencies. Place the server code in `cpp_action_pkg/src/fibonacci_server.cpp`.

Update `cpp_action_pkg/CMakeLists.txt`:
```cmake
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(rclcpp_action REQUIRED)
find_package(rclcpp_components REQUIRED)
find_package(tutorial_interfaces REQUIRED) # Your action interface package

add_executable(fibonacci_server src/fibonacci_server.cpp)
ament_target_dependencies(fibonacci_server rclcpp rclcpp_action rclcpp_components tutorial_interfaces)

install(TARGETS
  fibonacci_server
  DESTINATION lib/${PROJECT_NAME}
)
```
Then build and run:
```bash
colcon build --packages-select cpp_action_pkg
source install/setup.bash
ros2 run cpp_action_pkg fibonacci_server
```

### سی++ میں ایک ایکشن سرور بنانا

ایکشن سرور گولز وصول کرنے، طویل عرصے تک چلنے والے کام کو انجام دینے، فیڈ بیک فراہم کرنے، اور حتمی نتیجہ بھیجنے کا ذمہ دار ہے۔

```cpp
#include <functional>
#include <memory>
#include <thread>

#include "rclcpp/rclcpp.hpp"
#include "rclcpp_action/rclcpp_action.hpp"
#include "rclcpp_components/register_node_and_component.hpp"

#include "tutorial_interfaces/action/fibonacci.hpp" // اپنی ایکشن کی قسم سے تبدیل کریں

class FibonacciActionServer : public rclcpp::Node
{
public:
  using Fibonacci = tutorial_interfaces::action::Fibonacci;
  using GoalHandleFibonacci = rclcpp_action::ServerGoalHandle<Fibonacci>;

  RCLCPP_SHARED_PTR_DEFINITIONS(FibonacciActionServer)

  explicit FibonacciActionServer(const rclcpp::NodeOptions & options = rclcpp::NodeOptions())
  : Node("fibonacci_action_server", options)
  {
    this->action_server_ = rclcpp_action::create_server<Fibonacci>(
      this,
      "fibonacci",
      std::bind(&FibonacciActionServer::handle_goal, this, std::placeholders::_1, std::placeholders::_2),
      std::bind(&FibonacciActionServer::handle_cancel, this, std::placeholders::_1),
      std::bind(&FibonacciActionServer::handle_accepted, this, std::placeholders::_1));

    RCLCPP_INFO(this->get_logger(), "Fibonacci Action Server started!");
  }

private:
  rclcpp_action::Server<Fibonacci>::SharedPtr action_server_;

  rclcpp_action::GoalResponse handle_goal(
    const rclcpp_action::GoalUUID & uuid,
    std::shared_ptr<const Fibonacci::Goal> goal)
  {
    RCLCPP_INFO(this->get_logger(), "Received goal request with order %d", goal->order);
    (void)uuid;
    // بہت بڑے گولز کو مسترد کریں
    if (goal->order > 50) {
      RCLCPP_WARN(this->get_logger(), "Goal order too high (%d). Rejecting.", goal->order);
      return rclcpp_action::GoalResponse::REJECT;
    }
    return rclcpp_action::GoalResponse::ACCEPT_AND_EXECUTE;
  }

  rclcpp_action::CancelResponse handle_cancel(
    const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    RCLCPP_INFO(this->get_logger(), "Received request to cancel goal");
    (void)goal_handle;
    return rclcpp_action::CancelResponse::ACCEPT;
  }

  void handle_accepted(const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    // یہ تیزی سے واپس آنا چاہیے تاکہ ایگزیکیوٹر کو بلاک نہ کرے، لہذا ایک نیا تھریڈ شروع کریں۔
    std::thread{std::bind(&FibonacciActionServer::execute, this, std::placeholders::_1), goal_handle}.detach();
  }

  void execute(const std::shared_ptr<GoalHandleFibonacci> goal_handle)
  {
    RCLCPP_INFO(this->get_logger(), "Executing goal with order %d", goal_handle->request.order);
    rclcpp::Rate loop_rate(1);
    const auto goal = goal_handle->request;
    auto feedback = std::make_shared<Fibonacci::Feedback>();
    auto & sequence = feedback->sequence;
    sequence.push_back(0);
    sequence.push_back(1);
    auto result = std::make_shared<Fibonacci::Result>();

    for (int i = 1; (i < goal->order) && rclcpp::ok(); ++i) {
      if (goal_handle->is_cancel_requested) {
        result->sequence = sequence;
        goal_handle->canceled(result);
        RCLCPP_INFO(this->get_logger(), "Goal canceled");
        return;
      }
      sequence.push_back(sequence[i] + sequence[i - 1]);
      goal_handle->publish_feedback(feedback);
      RCLCPP_INFO(this->get_logger(), "Publishing feedback");

      loop_rate.sleep();
    }

    if (rclcpp::ok()) {
      result->sequence = sequence;
      goal_handle->succeed(result);
      RCLCPP_INFO(this->get_logger(), "Goal succeeded");
    }
  }
};

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);
  auto node = std::make_shared<FibonacciActionServer>();
  rclcpp::spin(node);
  rclcpp::shutdown();
  return 0;
}
```

**بنائیں اور چلائیں (سی++ ایکشن سرور):**
یہ فرض کرتے ہوئے کہ `tutorial_interfaces` بنایا گیا ہے، `rclcpp`, `rclcpp_action`, `rclcpp_components`, اور `tutorial_interfaces` ڈیپینڈنسیز کے ساتھ ایک نیا سی++ پیکیج (مثلاً، `cpp_action_pkg`) بنائیں۔ سرور کوڈ `cpp_action_pkg/src/fibonacci_server.cpp` میں رکھیں۔

`cpp_action_pkg/CMakeLists.txt` کو اپ ڈیٹ کریں:
```cmake
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(rclcpp_action REQUIRED)
find_package(rclcpp_components REQUIRED)
find_package(tutorial_interfaces REQUIRED) # آپ کا ایکشن انٹرفیس پیکیج

add_executable(fibonacci_server src/fibonacci_server.cpp)
ament_target_dependencies(fibonacci_server rclcpp rclcpp_action rclcpp_components tutorial_interfaces)

install(TARGETS
  fibonacci_server
  DESTINATION lib/${PROJECT_NAME}
)
```
پھر بنائیں اور چلائیں:
```bash
colcon build --packages-select cpp_action_pkg
source install/setup.bash
ros2 run cpp_action_pkg fibonacci_server
```

### Creating an Action Client in C++

The action client sends goals to the server, monitors feedback, and receives the result.

```cpp
#include <functional>
#include <memory>
#include <thread>

#include "rclcpp/rclcpp.hpp"
#include "rclcpp_action/rclcpp_action.hpp"
#include "rclcpp_components/register_node_and_component.hpp"

#include "tutorial_interfaces/action/fibonacci.hpp" // Replace with your action type

class FibonacciActionClient : public rclcpp::Node
{
public:
  using Fibonacci = tutorial_interfaces::action::Fibonacci;
  using GoalHandleFibonacci = rclcpp_action::ClientGoalHandle<Fibonacci>;

  RCLCPP_SHARED_PTR_DEFINITIONS(FibonacciActionClient)

  explicit FibonacciActionClient(const rclcpp::NodeOptions & options = rclcpp::NodeOptions())
  : Node("fibonacci_action_client", options)
  {
    this->client_ptr_ = rclcpp_action::create_client<Fibonacci>(
      this,
      "fibonacci");
    RCLCPP_INFO(this->get_logger(), "Fibonacci Action Client started!");
  }

  void send_goal(int32_t order)
  {
    using namespace std::placeholders;

    if (!this->client_ptr_->wait_for_action_server(std::chrono::seconds(10))) {
      RCLCPP_ERROR(this->get_logger(), "Action server not available after waiting");
      return;
    }

    auto goal_msg = Fibonacci::Goal();
    goal_msg.order = order;

    RCLCPP_INFO(this->get_logger(), "Sending goal with order %d", goal_msg.order);

    auto send_goal_options = rclcpp_action::Client<Fibonacci>::SendGoalOptions();
    send_goal_options.goal_response_callback =
      std::bind(&FibonacciActionClient::goal_response_callback, this, _1);
    send_goal_options.feedback_callback =
      std::bind(&FibonacciActionClient::feedback_callback, this, _1, _2);
    send_goal_options.result_callback =
      std::bind(&FibonacciActionClient::result_callback, this, _1);
    this->client_ptr_->async_send_goal(goal_msg, send_goal_options);
  }

private:
  rclcpp_action::Client<Fibonacci>::SharedPtr client_ptr_;

  void goal_response_callback(std::shared_future<std::shared_ptr<GoalHandleFibonacci>> future)
  {
    auto goal_handle = future.get();
    if (!goal_handle) {
      RCLCPP_ERROR(this->get_logger(), "Goal was rejected by server");
    } else {
      RCLCPP_INFO(this->get_logger(), "Goal accepted by server, waiting for result");
    }
  }

  void feedback_callback(
    GoalHandleFibonacci::SharedPtr,
    const std::shared_ptr<const Fibonacci::Feedback> feedback)
  {
    RCLCPP_INFO(this->get_logger(), "Next number in sequence: %d", feedback->sequence.back());
  }

  void result_callback(const GoalHandleFibonacci::WrappedResult & result)
  {
    switch (result.code) {
      case rclcpp_action::ResultCode::SUCCEEDED:
        RCLCPP_INFO(this->get_logger(), "Goal succeeded");
        break;
      case rclcpp_action::ResultCode::ABORTED:
        RCLCPP_ERROR(this->get_logger(), "Goal aborted");
        return;
      case rclcpp_action::ResultCode::CANCELED:
        RCLCPP_ERROR(this->get_logger(), "Goal canceled");
        return;
      default:
        RCLCPP_ERROR(this->get_logger(), "Unknown result code");
        return;
    }
    RCLCPP_INFO(this->get_logger(), "Result sequence:");
    for (auto number : result.result->sequence) {
      RCLCPP_INFO(this->get_logger(), "%d", number);
    }
    rclcpp::shutdown();
  }
};

int main(int argc, char **argv)
{
  rclcpp::init(argc, argv);
  auto node = std::make_shared<FibonacciActionClient>();
  node->send_goal(10); // Example goal
  rclcpp::spin(node);
  return 0;
}
```

**Build and Run (C++ Action Client):**
Place the client code in `cpp_action_pkg/src/fibonacci_client.cpp`.
Update `cpp_action_pkg/CMakeLists.txt` to add the client executable:
```cmake
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(rclcpp_action REQUIRED)
find_package(rclcpp_components REQUIRED)
find_package(tutorial_interfaces REQUIRED) # Your action interface package

add_executable(fibonacci_server src/fibonacci_server.cpp)
ament_target_dependencies(fibonacci_server rclcpp rclcpp_action rclcpp_components tutorial_interfaces)

add_executable(fibonacci_client src/fibonacci_client.cpp)
ament_target_dependencies(fibonacci_client rclcpp rclcpp_action rclcpp_components tutorial_interfaces)

install(TARGETS
  fibonacci_server
  fibonacci_client
  DESTINATION lib/${PROJECT_NAME}
)
```
Then build and run the client after the server is running:
```bash
colcon build --packages-select cpp_action_pkg
source install/setup.bash
ros2 run cpp_action_pkg fibonacci_client
```

