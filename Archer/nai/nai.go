package nai

import (
	"fmt"
	"log"
	"strings"
	"sync"

	"github.com/google/gopacket"
	"github.com/google/gopacket/layers"
	"github.com/google/gopacket/pcap"
)

// Network Adapter Interception

/*
This is an example of capturing network adapter messages using Google's open-source packet capture library `github.com/google/gopacket`.
Since it captures network adapter messages, it does not proxy any messages, thus not affecting the speed of message sending and receiving for any software. Accessing inaccessible websites only requires the normal activation of proxy software without the need for the proxy's TUN mode.
Here is just an example and not the complete code.

Since acquiring messages from the Network Adapter requires administrator privileges, an elevation of privilege scheme is also needed, which is not disclosed for the time being.
*/

type NAI struct{}

var (
	inst *NAI
	once = sync.OnceFunc(func() {
		inst = &NAI{}
	})
)

func Inst() *NAI {
	once()

	return inst
}

func (self *NAI) Run(call func(data []byte)) {
	// Find all network devices
	devices, err := pcap.FindAllDevs()
	if err != nil {
		log.Fatal(err)
	}

	// Print device information
	fmt.Println("Devices found:")
	for _, device := range devices {
		fmt.Println(device.Name)
	}

	// Open the first device. Replace "device.Name" with your specific device name if necessary
	handle, err := pcap.OpenLive(devices[0].Name, 1600, true, pcap.BlockForever)
	if err != nil {
		log.Fatal(err)
	}
	defer handle.Close()

	// Set the filter to capture only TCP packets
	if err := handle.SetBPFFilter("tcp"); err != nil {
		log.Fatal(err)
	}

	// Use the handle as a packet source to process all packets
	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	for packet := range packetSource.Packets() {
		// Do what you want to do, such as intercepting any message content from the network adapter, WebSocket data, etc., thereby eliminating the need to use MITM (Man-In-The-Middle) technology.
		self.processPacket(packet, call)
	}
}

func (self *NAI) processPacket(packet gopacket.Packet, call func(data []byte)) {
	// Attempt to get the TCP layer
	tcpLayer := packet.Layer(layers.LayerTypeTCP)
	if tcpLayer != nil {
		tcp, _ := tcpLayer.(*layers.TCP)

		// Check if the packet might be an HTTP request (simple check, may produce false positives)
		payload := string(tcp.Payload)
		if strings.Contains(payload, "HTTP") && strings.Contains(payload, "Upgrade: websocket") {
			fmt.Println("Potential WebSocket handshake request detected:")
			fmt.Printf("Source Port: %d, Destination Port: %d\n", tcp.SrcPort, tcp.DstPort)
			fmt.Println("Payload (partial):", payload[:min(len(payload), 200)]) // Print part of the Payload to avoid it being too long

			self.handlerWebSocket(tcp, call)
		}
	}
}

func (self *NAI) handlerWebSocket(tcp *layers.TCP, call func([]byte)) {
	// Confidential.
}
