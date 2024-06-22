## Lesson 2: Login

```go
package main

import (
    "fmt"
    "time"

    signmgr "github.com/moxcomic/Archer/mgr/activity_sign_mgr" // Archer's sign-in interface package
    "github.com/moxcomic/Archer/mgr/infomgr"                   // Archer's announcement interface package
    monthlymgr "github.com/moxcomic/Archer/mgr/monthly_mgr"    // Archer's monthly card interface package
)

// In this lesson, we will start with login
// Since the first event in the game is logging in
// Here we need to ensure that the package name is main and that this file contains the onLogin function which Archer will call
func onLogin() {
    // We use the game Mahjong Soul as an example
    // After logging in to Mahjong Soul, the events that occur include [pop-up announcements], [pop-up sign-in], and [pop-up monthly card collection]
    // Here we will implement the logic to close the [announcement window], close the [sign-in window], and close the [monthly card collection window]
  
    // Wait until fully entering the game lobby
    for range time.Tick(time.Second) { // Execute the logic inside the loop once per second
        if !lobbymgr.Inst().Enable() {  // Not yet entered the lobby
            fmt.Println("Waiting to Lobby...")
            continue
        }

        break // Entered the lobby, exit the loop
    }

    // The order in which these three windows pop up in the game is not fixed; the [announcement] might pop up first or the [sign-in] might pop up first
    // Here we do not consider this situation, only explaining it; you will need to optimize it yourself

    // Logic to close the [announcement] window
    // Archer provides an interface for announcement-related logic
    // You can use the relevant interfaces to handle announcement operations
    // Here, the Enable() method returns true if the [window] is popped up
    // The Enable() method is valid 24 hours a day; it will return true as long as the window pops up at any time
    switch infomgr.Inst().Enable() {
    case true: // Window popped up
        for range time.Tick(time.Second) { // Execute the logic inside the loop once per second
            if infomgr.Inst().Enable() { // If the [window] pops up
                fmt.Println("Closing announcement window")
                infomgr.Inst().Close() // Call the Archer interface to close the [window]

                continue // Skip to the next iteration
            }

            break // If the above Enable() returns false, execute here to exit the loop
        }

        fmt.Println("Announcement window closed")
    default:
        fmt.Println("Announcement window did not pop up")
    }

    // Logic to close the [monthly card collection] window
    // Archer provides an interface for monthly card-related logic
    // You can use the relevant interfaces to handle monthly card operations
    // Here, the Enable() method returns true if the [window] is popped up
    // The Enable() method is valid 24 hours a day; it will return true as long as the window pops up at any time
    switch monthlymgr.Inst().Enable() {
    case true: // Window popped up
        for range time.Tick(time.Second) { // Execute the logic inside the loop once per second
            if monthlymgr.Inst().Enable() { // If the [window] pops up
                fmt.Println("Closing monthly card window")
                monthlymgr.Inst().Close() // Call the Archer interface to close the [window]

                continue // Skip to the next iteration
            }

            break // If the above Enable() returns false, execute here to exit the loop
        }

        fmt.Println("Monthly card window closed")
    default:
        fmt.Println("Monthly card window did not pop up")
    }

    // Logic to sign in and close the [sign-in] window
    // Archer provides an interface for sign-in-related logic
    // You can use the relevant interfaces to handle sign-in operations
    // Here, the Enable() method returns true if the [window] is popped up
    // The Enable() method is valid 24 hours a day; it will return true as long as the window pops up at any time
    switch signmgr.Inst().Enable() {
    case true: // Window popped up
        // Define the method to close the window
        close := func() {
            fmt.Println("Preparing to close the sign-in window")
            <-time.After(time.Second * 5) // Delay for 5 seconds to ensure the sign-in animation is complete

            for range time.Tick(time.Second) { // Execute the logic inside the loop once per second
                if signmgr.Inst().Enable() { // If the [window] pops up
                    fmt.Println("Closing sign-in window")
                    signmgr.Inst().Close() // Call the Archer interface to close the [window]

                    continue // Skip to the next iteration
                }

                break // If the above Enable() returns false, execute here to exit the loop
            }

            fmt.Println("Sign-in window closed")
        }

        // Get the sign-in time, variable name can be anything
        st := time.Unix(signmgr.Inst().LastSignTime(), 0)
        // Get today's date, variable name can be anything
        dt := time.Now()

        // Print the last sign-in time
        fmt.Println("Last sign time:", st.Format("2006-01-02 15:04:05"))

        // If the current time is before 5 AM, skip execution
        // Because Mahjong Soul considers 5 AM as the start of a new day
        if dt.Hour() < 5 {
            fmt.Println("dt hours < 5")
            close() // Close the sign-in window
            return
        }

        // If the [last sign-in date] is the same as [today's date] and the [last sign-in date]'s [hour] is after 5 AM, skip execution
        // Because you have already signed in
        if st.Day() == dt.Day() && st.Hour() >= 5 {
            fmt.Println("st hours >= 5")
            close() // Close the sign-in window
            return
        }

        fmt.Println("Signing in")
        <-time.After(time.Second * 2) // Delay for 2 seconds
        signmgr.Inst().Sign()         // Call the Archer interface to sign in

        close() // Close the sign-in window
    default:
        fmt.Println("Sign-in window did not pop up")
    }
}
```