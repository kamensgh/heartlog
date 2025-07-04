"use client"

import { useState } from "react"
import { Bell, Calendar, Gift, Heart, Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Reminder {
  id: string
  title: string
  type: "birthday" | "anniversary" | "custom"
  date: string
  daysAdvance: number
  enabled: boolean
  recurring: boolean
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      title: "Sarah's Birthday",
      type: "birthday",
      date: "2024-05-15",
      daysAdvance: 7,
      enabled: true,
      recurring: true,
    },
    {
      id: "2",
      title: "Anniversary",
      type: "anniversary",
      date: "2024-09-22",
      daysAdvance: 14,
      enabled: true,
      recurring: true,
    },
    {
      id: "3",
      title: "Valentine's Day",
      type: "custom",
      date: "2024-02-14",
      daysAdvance: 7,
      enabled: true,
      recurring: true,
    },
  ])

  const [newReminder, setNewReminder] = useState<Partial<Reminder>>({
    title: "",
    type: "custom",
    date: "",
    daysAdvance: 7,
    enabled: true,
    recurring: true,
  })

  const [isAddingReminder, setIsAddingReminder] = useState(false)

  const addReminder = () => {
    if (newReminder.title && newReminder.date) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        title: newReminder.title,
        type: newReminder.type as "birthday" | "anniversary" | "custom",
        date: newReminder.date,
        daysAdvance: newReminder.daysAdvance || 7,
        enabled: newReminder.enabled || true,
        recurring: newReminder.recurring || true,
      }
      setReminders([...reminders, reminder])
      setNewReminder({
        title: "",
        type: "custom",
        date: "",
        daysAdvance: 7,
        enabled: true,
        recurring: true,
      })
      setIsAddingReminder(false)
    }
  }

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "birthday":
        return <Gift className="h-4 w-4" />
      case "anniversary":
        return <Heart className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "birthday":
        return "bg-blue-100 text-blue-800"
      case "anniversary":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-purple-100 text-purple-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4 font-system">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Bell className="h-8 w-8 text-pink-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Reminders</h1>
              <p className="text-gray-600">Never miss an important moment</p>
            </div>
          </div>
          <Dialog open={isAddingReminder} onOpenChange={setIsAddingReminder}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Reminder
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Reminder</DialogTitle>
                <DialogDescription>Set up a new reminder for important dates</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newReminder.title}
                    onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                    placeholder="e.g., Valentine's Day"
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select
                    value={newReminder.type}
                    onValueChange={(value) => setNewReminder({ ...newReminder, type: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="custom">Custom Event</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newReminder.date}
                    onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="advance">Remind me (days in advance)</Label>
                  <Select
                    value={newReminder.daysAdvance?.toString()}
                    onValueChange={(value) => setNewReminder({ ...newReminder, daysAdvance: Number.parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">1 week</SelectItem>
                      <SelectItem value="14">2 weeks</SelectItem>
                      <SelectItem value="30">1 month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="recurring"
                    checked={newReminder.recurring}
                    onCheckedChange={(checked) => setNewReminder({ ...newReminder, recurring: checked })}
                  />
                  <Label htmlFor="recurring">Repeat annually</Label>
                </div>
                <Button onClick={addReminder} className="w-full">
                  Create Reminder
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Active Reminders */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Active Reminders</CardTitle>
            <CardDescription>Your upcoming notifications and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reminders
              .filter((r) => r.enabled)
              .map((reminder) => (
                <div key={reminder.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${getTypeColor(reminder.type)}`}>
                      {getTypeIcon(reminder.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(reminder.date).toLocaleDateString()} • {reminder.daysAdvance} days advance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {reminder.recurring ? "Annual" : "One-time"}
                    </Badge>
                    <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteReminder(reminder.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            {reminders.filter((r) => r.enabled).length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No active reminders</p>
                <p className="text-sm">Create your first reminder to get started</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Disabled Reminders */}
        {reminders.filter((r) => !r.enabled).length > 0 && (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Disabled Reminders</CardTitle>
              <CardDescription>Reminders that are currently turned off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {reminders
                .filter((r) => !r.enabled)
                .map((reminder) => (
                  <div
                    key={reminder.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border opacity-60"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${getTypeColor(reminder.type)}`}>
                        {getTypeIcon(reminder.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(reminder.date).toLocaleDateString()} • {reminder.daysAdvance} days advance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {reminder.recurring ? "Annual" : "One-time"}
                      </Badge>
                      <Switch checked={reminder.enabled} onCheckedChange={() => toggleReminder(reminder.id)} />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteReminder(reminder.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        )}

        {/* Quick Setup */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Setup</CardTitle>
            <CardDescription>Common reminders you might want to add</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="font-medium">Valentine's Day</span>
                <span className="text-xs text-gray-500">February 14th</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <Gift className="h-6 w-6 text-blue-500" />
                <span className="font-medium">Christmas</span>
                <span className="text-xs text-gray-500">December 25th</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                <Calendar className="h-6 w-6 text-purple-500" />
                <span className="font-medium">New Year</span>
                <span className="text-xs text-gray-500">January 1st</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
