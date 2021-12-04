from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class UserInfo(models.Model):
    username = models.CharField(max_length=20, primary_key=True)
    firstName = models.CharField(max_length=20)
    middleName = models.CharField(max_length=20, null=True)
    lastName = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    address1 = models.CharField(max_length=20)
    address2 = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=12)
    zip = models.CharField(max_length=11)
    employerName = models.CharField(max_length=20)
    
    def __str__(self) -> str:
        return self.username
    
class SubscriptionType(models.Model):
    subscriptionTypeCode = models.IntegerField(primary_key=True)    
    subscriptionTypeName = models.CharField(max_length=40)
    
    def __str__(self) -> str:
        return self.subscriptionTypeName


class Service(models.Model):
    serviceCode = models.IntegerField(primary_key=True)
    serviceName = models.CharField(max_length=40)
    description = models.CharField(max_length=80)
    premium = models.FloatField()
    allocation = models.CharField(max_length=40)
    
    def __str__(self) -> str:
        return self.serviceName
    
class Subscriber(models.Model):
    subscriberID = models.IntegerField(primary_key=True, serialize=True)
    username = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
    subscriptionTypeCode = models.ForeignKey(SubscriptionType, on_delete=models.DO_NOTHING)
    serviceCode = models.ForeignKey(Service, on_delete=models.DO_NOTHING)
    requestDate = models.DateField()
    startDate = models.DateField()
    endDate = models.DateField(null=True)
    motifCancel = models.CharField(max_length=120)
    
    def __str__(self) -> str:
        return(self.subscriberID + ' ' + self.username)
    
    
class TransferredSubscription(models.Model):
    transferID = models.IntegerField(primary_key=True)
    transferFrom = models.CharField(max_length=40)
    transferTo = models.CharField(max_length=40)
    requestDate = models.DateField()
    transferDate = models.DateField(null=True)
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return('Transfer ID: ' + self.transferID)
    
class Office(models.Model):
    officeCode = models.IntegerField(primary_key=True)
    officeName = models.CharField(max_length=20)
    attribution = models.CharField(max_length=80)
    
    def __str__(self) -> str:
        return self.officeName
    
class Officer(models.Model):
    officeCode = models.ForeignKey(Office, on_delete=models.CASCADE)
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)
    startDate = models.DateField()
    endDate = models.DateField(null=True)
    
    def __str__(self) -> str:
        return('Office: ' + self.officeCode + ' \tSubscriber: ' + self.subscriberID)
    
class Organization(models.Model):
    orgCode = models.IntegerField(primary_key=True)
    orgName = models.CharField(max_length=40)
    description = models.CharField(max_length=120)
    dateJoined = models.DateField()
    address1 = models.CharField(max_length=20)
    address2 = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=12)
    zip = models.CharField(max_length=11)
    phone = models.CharField(max_length=15)
    
    def __str__(self) -> str:
        return self.orgName
    
class  OrganizationMember(models.Model):
    orgCode = models.ForeignKey(Organization, on_delete=models.DO_NOTHING)
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)
    startDate = models.DateField()
    endDate = models.DateField(null=True)
    nativeCountry = models.CharField(max_length=20)
    citizenship = models.CharField(max_length=20)
    isDelegate = models.BooleanField()
    
    def __str__(self) -> str:
        return('Org: ' + self.orgCode + ' \tSubscriber: ' + self.subscriberID)
    

    
    
    