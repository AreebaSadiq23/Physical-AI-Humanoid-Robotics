import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class SimpleRobotController(Node):

    def __init__(self):
        super().__init__('simple_robot_controller')
        self.publisher_ = self.create_publisher(Twist, '/cmd_vel', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.get_logger().info('Simple Robot Controller Node started. Publishing Twist messages to /cmd_vel')

    def timer_callback(self):
        msg = Twist()
        msg.linear.x = 0.5  # Move forward at 0.5 m/s
        msg.angular.z = 0.1  # Turn slowly to the left
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: Linear.x={msg.linear.x}, Angular.z={msg.angular.z}')

def main(args=None):
    rclpy.init(args=args)
    simple_robot_controller = SimpleRobotController()
    rclpy.spin(simple_robot_controller)
    simple_robot_controller.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
