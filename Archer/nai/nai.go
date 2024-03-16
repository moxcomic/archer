package nai

import (
	"fmt"
	"log"
	"sync"

	"github.com/google/gopacket"
	"github.com/google/gopacket/pcap"
)

// Network Adapter Interception

/*
This is an example of capturing network adapter messages using Google's open-source packet capture library `github.com/google/gopacket`.
Since it captures network adapter messages, it does not proxy any messages, thus not affecting the speed of message sending and receiving for any software. Accessing inaccessible websites only requires the normal activation of proxy software without the need for the proxy's TUN mode.
Here is just an example and not the complete code.
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

func (self *NAI) Run() {
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

	// Use the handle as a packet source to process all packets
	packetSource := gopacket.NewPacketSource(handle, handle.LinkType())
	for packet := range packetSource.Packets() {
		fmt.Println(packet)
		// Do what you want to do, such as intercepting any message content from the network adapter, WebSocket data, etc., thereby eliminating the need to use MITM (Man-In-The-Middle) technology.
	}
}
